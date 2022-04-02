import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from 'emailjs';

type FieldInitalInput = {
  name: string;
  email: string;
  message: string;
}
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const data = request.body as FieldInitalInput;

    try {
      const host = process.env.SMTP;
      const port = process.env.PORT;
      const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASS,
        host: host,
        ssl: true,
      });


      console.log('E-mail enviadoasdasd');
      const fact = (await axios.get('https://catfact.ninja/fact')).data
      console.log('hello', fact);

      const message = await client.sendAsync({
        text: 'i hope this works',
        from: process.env.EMAIL,
        to: 'kevsonfilipesantos@gmail.com',
        subject: 'testing emailjs',
      });

      console.log('E-mail enviadoasdasd', message);
      return response.status(200).json({ message: "E-mail enviadoasdasd" })
    } catch (error) {
      return response.status(500).json({ message: "Houve um erro interno no servidor estamos tentando resolve-lo" })
    }
  } else {
    return response.status(400).json({ message: "Not Found" });
  }
}
