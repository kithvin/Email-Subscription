import express from 'express';
import nodemailer from 'nodemailer';
import Subscription from '../models/Subscription.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body;
  
  try {
    // Check for existing subscription
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(200).json({ message: 'This email is already subscribed.' });
    }

    // Create new subscription
    const newSubscription = await Subscription.create({ email });

    // Setup transporter with Gmail App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    // Send email to admin
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Email Subscription',
      text: `New user subscribed: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      message: 'Subscribed successfully.',
      subscription: newSubscription 
    });

  } catch (error) {
    console.error('Subscription error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

export default router;
