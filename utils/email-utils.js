const nodemailer = require('nodemailer');
const config = require('../config.json');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailAddress,
    pass: config.emailPassword
  }
});

const sendResetPasswordEmail = (userEmail, resetCode) => {
  const mailOptions = {
    from: 'itilego@gmail.com',
    to: userEmail,
    subject: 'Reset Password',
    text: `Hello, \n This is your reset code: ${resetCode}`
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendResetPasswordEmail
}