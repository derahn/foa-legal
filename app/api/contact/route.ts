import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, matter, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "FOA Legal Website <noreply@foalegal.ca>",
    to: "ronke@foalegal.ca",
    replyTo: email,
    subject: `New enquiry: ${matter} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <h2 style="color:#1a1a1a;border-bottom:2px solid #C9A96E;padding-bottom:10px;">New Website Enquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C9A96E;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Area of Law</td><td style="padding:8px 0;">${matter}</td></tr>
        </table>
        <h3 style="color:#1a1a1a;margin-top:24px;">Message</h3>
        <p style="background:#f9f9f9;padding:16px;border-left:3px solid #C9A96E;margin:0;">${message}</p>
        <p style="color:#999;font-size:12px;margin-top:32px;">Sent from foalegal.ca contact form</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
