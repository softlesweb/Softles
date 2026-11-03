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
  // Extra label → value pairs a form wants on the lead (scores, UTMs, intake answers).
  const details = Object.entries(
    body.details && typeof body.details === "object" ? body.details : {}
  )
    .filter(([, v]) => v !== null && v !== undefined && String(v).trim() !== "")
    .slice(0, 25)
    .map(([k, v]) => [String(k).slice(0, 60), String(v).slice(0, 500)]);

  // Honeypot: real visitors never see this field. Pretend success so bots move on.
  if (body.company_website) {
    return Response.json({ ok: true });
  }

  // Need a way to reply, and a name unless an email alone identifies the lead.
  if ((!name && !email) || (!email && !phone)) {
    return Response.json(
      { error: "Name and an email or phone number are required." },
      { status: 400 }
    );
  }

  await forwardToCrm({ name, email, phone, message, storeUrl, goal, source, details });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "softlesweb@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "SoftLes Website <onboarding@resend.dev>";

  const rows = [
    ["Name", name || "—"],
    ["Email", email || "—"],
    ["Phone / WhatsApp", phone || "—"],
    goal ? ["Goal", goal] : null,
    storeUrl ? ["Store / site URL", storeUrl] : null,
    ["Source", source],
    ...details,
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
      subject: `New lead — ${source}: ${name || email}`,
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

// Optional: also POST the lead to the Softles CRM. Off until SOFTLES_CRM_WEBHOOK_URL is set.
// Never blocks the email alert — a CRM outage only gets logged.
async function forwardToCrm(lead) {
  const url = process.env.SOFTLES_CRM_WEBHOOK_URL;
  if (!url) return;
  try {
    const headers = { "Content-Type": "application/json" };
    if (process.env.SOFTLES_CRM_WEBHOOK_SECRET) {
      headers.Authorization = `Bearer ${process.env.SOFTLES_CRM_WEBHOOK_SECRET}`;
    }
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ ...lead, details: Object.fromEntries(lead.details) }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error("CRM webhook failed:", res.status);
  } catch (e) {
    console.error("CRM webhook error:", e);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
