import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // إعداد الـ transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // حط ايميلك
          pass: process.env.EMAIL_PASS, // باسورد او App Password
        },
      });

      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
