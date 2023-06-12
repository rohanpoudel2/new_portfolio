import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  const transport = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  transport.sendMail({
    from: "Rohan Poudel <no-reply@rohanpoudel.com.np",
    to,
    subject,
    text
  },
    (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email Sent: " + info.response);
      }
    }
  );
}