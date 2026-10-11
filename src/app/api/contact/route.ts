import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const hits = new Map<string, number[]>();
function allow(ip: string, max = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();
  const recent = (hits.get(ip) ?? []).filter((t: number) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

const oneLine = (s: any, max: number) => String(s ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

  if (!allow(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  const body = await req.json();
  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = oneLine(body.name, 80);
  const email = oneLine(body.email, 254).toLowerCase();
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!name) return NextResponse.json({ ok: false, error: 'invalid_name' }, { status: 400 });
  if (!EMAIL_REGEX.test(email)) return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ ok: false, error: 'invalid_message' }, { status: 400 });

  const to = process.env.CONTACT_TO_EMAIL;
  const host = process.env.SMTP_HOST;

  if (!to || !host) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[contact:dev] E-mail simulé avec succès :\nDe : ${name} <${email}>\nMessage : ${message}`);
      return NextResponse.json({ ok: true, simulated: true }, { status: 200 });
    }
    console.error("[contact] CONTACT_TO_EMAIL ou SMTP_HOST manquant.");
    return NextResponse.json({ ok: false, error: 'mail_not_configured' }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to,
      replyTo: `"${name.replace(/["<>]/g, "")}" <${email}>`,
      subject: `[Blog Nousdev] Message de ${name.slice(0, 60)}`,
      text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] échec d'envoi :", err);
    return NextResponse.json({ ok: false, error: 'mail_failed' }, { status: 502 });
  }
}
