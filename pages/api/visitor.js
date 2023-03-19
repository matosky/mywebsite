import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, msg } = req.body;
    // Create a Nodemailer transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mathiasakari37@gmail.com',
        pass: `${process.env.GMAIL_KEY}`,
      },
    });

    // Create an email message
    const mailOptions = {
      from: email,
      to: 'mathiasakari37@gmail.com',
      subject: 'Someone from your website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
    };

      
    try {
      // Send the email using the transporter object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(404).send();
  }
}
