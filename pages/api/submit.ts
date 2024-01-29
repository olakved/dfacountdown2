// pages/api/submit.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../utils/dbConnect';
import Email from '../../model/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  try {
    await connectDB();
    const newPost = new Email({ email });
    await newPost.save();
    res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
