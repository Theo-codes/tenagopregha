import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return NextResponse.json({ error: "Server configuration error: RESEND_API_KEY is missing." }, { status: 500 });
  }

  if (!contactEmail) {
    console.error("CONTACT_EMAIL is missing");
    return NextResponse.json({ error: "Server configuration error: CONTACT_EMAIL is missing." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactEmail,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json({ error: `Resend API Error: ${result.error.message}` }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error.message || 'Unknown error'}` }, { status: 500 });
  }
}
