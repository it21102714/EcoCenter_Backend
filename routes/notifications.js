const nodemailer = require('nodemailer');
const twilio = require('twilio');

router.post('/notifications', async (req, res) => {
    try {
      // Get the recipient email and phone number from the request body
      const { email, phone } = req.body;
  
      // Create a nodemailer transporter with your email provider's SMTP settings
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'your_email@example.com',
          pass: 'your_password'
        }
      });
  
      // Define the email message
      const mailOptions = {
        from: 'your_email@example.com',
        to: email,
        subject: 'Test Test',
        text: 'Test 123'
      };
  
      // Send the email using nodemailer
      await transporter.sendMail(mailOptions);
  
      // Create a Twilio client with your Twilio account SID and auth token
      // const client = twilio('your_account_sid', 'your_auth_token');
  
      // Define the text message
      // const message = {
      //  body: 'Your message text',
      //  to: phone,
      //  from: 'your_twilio_phone_number'
      // };
  
      // Send the text message using Twilio
      // await client.messages.create(message);
  
      // Return a success message to the client
      res.json({ message: 'Notification sent successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  