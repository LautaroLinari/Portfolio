// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    // const { body } = await req.json();
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['lautarolinari18@gmail.com', email],
      subject: subject,
      react: (
        <>
            <h1>{subject} </h1>
            <p>Gracias por contactarse conmigo!</p>
            <p>Nuevo mensaje enviado:</p>
            <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
