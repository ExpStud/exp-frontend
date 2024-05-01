import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) { 
  try {
    const email = request.query.email as string;
    const password = request.query.password as string;

    if (!email || !password) throw new Error('Email and password are required');

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await sql`INSERT INTO Users (Email, PasswordHash) VALUES (${email}, ${hashedPassword});`;

    return response.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    return response.status(500).json({ error });
  }
}