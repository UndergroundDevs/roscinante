import nodemailer from 'nodemailer'
import { FieldInitalInput } from 'pages/voyager'
import { validationContact } from 'services/validation'

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const data = request.body as FieldInitalInput;

    if (!data) {
      return {
        status: false,
        data: null,
        error: 'Invalid request',
      }
    }

    try {
      await validationContact.validate(data, { abortEarly: true })
    } catch (error: any) {
      const err = JSON.parse(JSON.stringify(error))
      return response.status(400).json({
        status: false,
        data: null,
        error: err.message
      });
    }

    try {
      const host = process.env.SMTP;
      const port = process.env.PORT;

      let transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: false,
        auth: {
          user: 'kevsonfilipesantos@gmail.com', // generated ethereal user
          pass: 'xaqflbasbnailysg', // generated ethereal password
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        replyTo: data.email,
        subject: "[INSCRIÇÃO MENTORADOS] " + data.name,
        html: `
          <h2>Por que você deseja ser um de nossos mentorados?</h2>
          <h4>${data.name}</h4>
          <p>E-mail: ${data.email}</p>
          <p>${data.message}</p>
        `
      });

      return response.status(200).json({
        error: null,
        data: 'E-mail enviado',
        status: true,
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        data: null,
        error: 'Houve um erro interno no servidor estamos tentando resolve-lo',
        status: false,
      })
    }
  } else {
    return response.status(400).json({ message: "Not Found" });
  }
}