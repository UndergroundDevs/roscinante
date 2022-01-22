import nodemailer from 'nodemailer'
import { FieldInitalInput } from 'pages/voyager'
import { validationContact } from 'services/validation'

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const data = request.body as FieldInitalInput;

    try {
      await validationContact.validate(data, { abortEarly: false })
    } catch (error: any) {
      return response.status(400).json({
        status: false,
        data: null,
        error: error,
      });
    }

    // try {
    //   const host = process.env.SMTP;
    //   const port = Number(process.env.PORT_EMAIL?.toString());

    //   let transporter = nodemailer.createTransport({
    //     host: host,
    //     port: port,
    //     secure: true,
    //     auth: {
    //       user: process.env.USERMAIL,
    //       pass: process.env.PASSWORD,
    //     },
    //   });

    //   await transporter.sendMail({
    //     from: 'moveis@nhouseplanejado.com',
    //     to: 'moveis@nhouseplanejado.com',
    //     replyTo: data.email,
    //     subject: "[CONTATO] "+ data.name,
    //     html: `
    //       <h4>${data.name}</h4>
    //       <p>E-mail: ${data.email}</p>
    //       <p>${data.message}</p>
    //     `
    //   });

    //   return response.status(200).json({
    //     error: null,
    //     data: 'E-mail enviado',
    //     status: true,
    //   })
    // } catch (error) {
    //   console.log(error)
    //   return response.status(500).json({
    //     data: null,
    //     error: 'Houve um erro interno no servidor estamos tentando resolve-lo',
    //     status: false,
    //   })
    // }
  } else {
    response.status(400).json({ message: "Not Found" });
  }
}