import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const TO = Deno.env.get("MAIL_TO") ?? "yameenmohammed537@gmail.com";
const FROM = Deno.env.get("MAIL_FROM") ?? "ArshGroup <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return String(s).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const row = payload.record ?? payload;

    const html = `
      <h2>New enquiry — ${escapeHtml(row.name ?? "")}</h2>
      <p><b>Phone:</b> ${escapeHtml(row.phone ?? "—")}</p>
      <p><b>Email:</b> ${escapeHtml(row.email ?? "—")}</p>
      <p><b>Service:</b> ${escapeHtml(row.service ?? "—")}</p>
      <p><b>Message:</b><br>${escapeHtml(row.message ?? "").replace(/\n/g, "<br>")}</p>
      <hr>
      <p style="color:#888;font-size:12px">
        Source: ${escapeHtml(row.source ?? "—")} · ${row.created_at ?? ""}
      </p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        subject: `New enquiry from ${row.name ?? "website"}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend failed", res.status, text);
      return new Response(text, { status: 500 });
    }
    return new Response("ok");
  } catch (err) {
    console.error("notify-enquiry error", err);
    return new Response(String(err), { status: 500 });
  }
});
