import { Resend } from "resend";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "softlesweb@gmail.com";
  // Switch to a verified domain sender (e.g. "SoftLes <hello@softles.in>") once softles.in is verified in Resend.
  const from = process.env.CONTACT_FROM_EMAIL || "SoftLes Website <onboarding@resend.dev>";

  const html = `
    <h2 style="margin:0 0 12px">New enquiry from softles.in</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message || "(no message)")}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message || "Failed to send." }, { status: 502 });
    }
    return Response.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("Resend exception:", e);
    return Response.json({ error: "Failed to send." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
