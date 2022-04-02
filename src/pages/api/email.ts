import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type DataResponse = {
  message: string;
}

type FieldInitalInput = {
  name: string;
  email: string;
  message: string;
}

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse<DataResponse>) {
  if (request.method === "POST") {
    const data = request.body as FieldInitalInput;

    const host = process.env.SMTP;
    const port = process.env.PORT;
    let transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: false,
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });

    try {

      // await transporter.sendMail({
      //   from: process.env.EMAIL,
      //   to: process.env.EMAIL,
      //   replyTo: data.email,
      //   subject: "[CONTATO] " + data.name,
      //   html: `
      //     <h2>Por que você deseja ser um de nossos mentorados?</h2>
      //     <h4>${data.name}</h4>
      //     <p>E-mail: ${data.email}</p>
      //     <p>${data.message}</p>
      //   `
      // });
      return response.status(200).json({ message: "E-mail enviado" })
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Houve um erro interno no servidor estamos tentando resolve-lo" })
    }
  } else {
    return response.status(400).json({ message: "Not Found" });
  }
}