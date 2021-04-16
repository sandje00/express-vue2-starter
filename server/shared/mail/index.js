'use strict';

const { CLIENT_URL } = process.env;
const {  } = require('./config');
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport(config);

const from = `${sender.name} <${sender.address}>`;

function sendEmail(mailOptions) {
  return transport.sendMail({ from, ...mailOptions });
}

function sendVerificationEmail(token, email) {
  const link = `${CLIENT_URL}/auth/verify/${token}`;
  return sendEmail({
    to: email,
    subject: 'Verify your email account',
    html: `<p>Please, click on the following <a href="${link}">link</a> to verify your email address</p>
          <br><p>If you did not request this, please ignore this message.</p>`
  });
}

module.exports = {
  sendVerificationEmail
};
