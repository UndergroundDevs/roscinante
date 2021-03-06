import { FieldInitalInput } from 'pages/index'
import { validationContact } from 'services/validation'
import { SMTPClient } from 'emailjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
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
      const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASS,
        host: host,
        ssl: true,
      });

      await client.sendAsync({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        replyTo: data.email,
        subject: "[INSCRIÇÃO MENTORADOS] " + data.name,
        text: `
          Por que deseja se tornar um membro da e101?
          ${data.name}
          E-mail: ${data.email}
          ${data.message}
        `,
        attachment: [
          {
            data: `
              <h3>Por que deseja se tornar um membro da e101?</h3>
              <h4>${data.name}</h4>
              <p>E-mail: ${data.email}</p>
              <p>${data.message}</p>
            `,
            alternative: true
          },
        ],
        "x-priority": "1",
        "x-msmail-priority": "High",
        "reply-to": "kevsonfilipesantos@gmail.com",
        importance: "high",
      });

      return response.status(200).json({
        error: null,
        data: 'E-mail enviado',
        status: true,
      })
    } catch (error) {
      return response.status(500).json({
        data: null,
        error: 'Houve um erro interno no servidor estamos tentando resolve-lo',
        status: false,
      })
    }
  } else {
    return response.status(404).json({
      data: null,
      error: 'Not Found',
      status: false,
    })
  }
}
