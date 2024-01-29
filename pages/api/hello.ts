import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import Email from '../../model/email';
import convertToCSV from '../../hooks/csvSaver';

const emailDataDirectory = path.join(process.cwd(), 'emailData');
const csvFilePath = path.join(emailDataDirectory, 'emails.csv');

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Read the content of the CSV file
    const userData = await Email.find({}, { _id: 0, __v: 0 }); // Exclude _id and __v
    const emails = userData.map(({ email }) => email);
    const csvData = convertToCSV(emails);

    // Set headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=emails.csv');

    // Send the CSV content as the response
    res.status(200).send(csvData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
