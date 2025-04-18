import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Ensure the request method is DELETE
    if (request.method !== 'DELETE') {
      return response.status(405).json({ error: 'Method not allowed' });
    }

    // Get the unique identifier (e.g., email) from the query parameters
    const email = request.query.email as string;

    // Validate that the email is provided
    if (!email) {
      throw new Error('Email is required');
    }

    // Execute the DELETE query using the unique column
    await sql`DELETE FROM Leads WHERE email = ${email};`;

    // Return a success response
    return response.status(200).json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return response.status(500).json({ error: (error as Error).message || 'Internal server error' });
  }
}