import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

// Load environment variables FIRST
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Check if environment variables are loading
console.log('🔧 Environment check:');
console.log('PORT:', process.env.PORT);
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Loaded' : 'Not loaded');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Loaded' : 'Not loaded');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

// ✅ FIXED: Changed createTransporter to createTransport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    console.log('📧 Form submission received from:', firstName, lastName);

    // Step 1: Save to MongoDB
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message
    });

    await newContact.save();
    console.log('📝 Contact saved to database with ID:', newContact._id);

    // Step 2: Send email to you
    const mailToYou = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER,   // Send to yourself
      subject: `New Message from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Saved to database with ID: ${newContact._id}</small></p>
      `
    };

    // Step 3: Send auto-reply to user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <h3>Hello ${firstName},</h3>
        <p>Thank you for reaching out! I have received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>Arun</p>
      `
    };

    // Send emails
    await transporter.sendMail(mailToYou);
    console.log('✅ Notification email sent to you');
    
    await transporter.sendMail(autoReply);
    console.log('✅ Auto-reply sent to user');

    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ Backend is working!',
    environment: 'Environment variables loaded successfully'
  });
});

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});