 const nodemailer = require('nodemailer');

const from = '"CalorieCalculator" <info@calorie-calculator.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to CalorieCalculator',
    text: `
    Welcome to CalorieCalculator. Please, confirm your email.
    ${user.generateConfirmationUrl()}
    `
  };

  tranport.sendMail(email);
}


export function sendResetPasswordEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Password RESET',
    text: `
    Follow this link to reset password:
    ${user.generateResetPasswordUrl(user)}
    `
  };

  tranport.sendMail(email);
}
