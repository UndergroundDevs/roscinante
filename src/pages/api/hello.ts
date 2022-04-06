import type { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse) {
  return response.status(200).send('Hello World');
}

