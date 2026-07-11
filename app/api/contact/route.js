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
  const phone = (body.phone || body.whatsapp || "").trim();
  const message = (body.message || "").trim();
  const storeUrl = (body.storeUrl || "").trim();
  const goal = (body.goal || "").trim();
  const source = (body.source || "Website contact form").trim();

  // Need a name and at least one way to reply.
  if (!name || (!email && !phone)) {
    return Response.json(
      { error: "Name and an email or phone number are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "softlesweb@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "SoftLes Website <onboarding@resend.dev>";

  const rows = [
    ["Name", name],
    ["Email", email || "—"],
    ["Phone / WhatsApp", phone || "—"],
    goal ? ["Goal", goal] : null,
    storeUrl ? ["Store / site URL", storeUrl] : null,
    ["Source", source],
  ].filter(Boolean);

  const html = `
    <h2 style="margin:0 0 12px">New lead — ${escapeHtml(source)}</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666"><strong>${escapeHtml(k)}</strong></td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
    ${message ? `<p style="margin-top:16px"><strong>Message:</strong></p><p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px">${escapeHtml(message)}</p>` : ""}
  `;

  try {
    const payload = {
      from,
      to: [to],
      subject: `New lead — ${source}: ${name}`,
      html,
    };
    if (email) payload.replyTo = email;

    const { data, error } = await resend.emails.send(payload);
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
