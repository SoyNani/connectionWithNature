import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    // Configurar el transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar las opciones del correo
    const mailOptions = {
        from: `"Soy Nani" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: '¡Gracias por unirte a la aventura! 🌿✈️',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            
            <h1 style="color: #2d7d46; text-align: center;">
                ¡Bienvenido a la aventura! 🌿
            </h1>
            
            <p style="font-style: italic; text-align: center; font-size: 18px; margin: 30px 0;">
                "El mundo es un libro, y aquellos que no viajan leen solo una página."
            </p>
            
            <p style="margin: 25px 0 15px 0; font-size: 16px;">
                Estos son los <strong>3 destinos naturales</strong> en tendencia para ti este agosto 2025:
            </p>
            
            <img 
                src="https://connection-with-nature.s3.us-east-1.amazonaws.com/imagenCorreo.png" 
                alt="Destinos naturales" 
                style="max-width: 100%; margin: 20px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"
            />
            
            <p style="text-align: center; margin: 30px 0 20px 0; font-size: 16px;">
                ¡Nos vemos en la naturaleza! 🌍✨
            </p>
            
            <hr style="border: none; height: 1px; background-color: #e0e0e0; margin: 25px 0;">
            
            <p style="text-align: center; color: #666; font-size: 14px;">
                Con cariño,<br>
                El equipo de <strong style="color: #2d7d46;">Soy Nani</strong>
            </p>
            
            </div>
        `,
        };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensaje enviado de forma exitosa' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando el mensje:', error);
    return NextResponse.json({ error: 'Error enviando el mensje' }, { status: 500 });
  }
}