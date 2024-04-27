import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const leads = await sql`SELECT * FROM Leads;`;
    return response.status(200).json({ leads });
  } catch (error) {
    return response.status(500).json({ error });
  }
}