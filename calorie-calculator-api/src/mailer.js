import nodemailer from 'nodemailer';

const from = '"CalorieCalculator" <info@calore-calculator.com>';

function setup() {
  return nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4d4bce3297955",
      pass: "b39feb0afef077"
    }
  })
}


export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to CalorieCalculator",
    text: `
      Welcome to CalorieCalculator. Please confirm your email.

      ${user.generateConfirmationUrl}
    `
  }

  trnasport.sendMail(email);
}
