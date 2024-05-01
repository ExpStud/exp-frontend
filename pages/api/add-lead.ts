import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const name = request.query.name as string;
    const email = request.query.email as string;
    const message = request.query.message as string;
    const budgetRange = request.query.budgetRange as string;

    if (!name || !email || !message || !budgetRange) throw new Error('All fields are required');

    await sql`INSERT INTO Leads (Name, Email, Message, BudgetRange) VALUES (${name}, ${email}, ${message}, ${budgetRange});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const leads = await sql`SELECT * FROM Leads;`;
  return response.status(200).json({ leads });
}