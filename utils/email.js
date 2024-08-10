const nodemailer = require('nodemailer');
const config = require('config');

const sendEmail = async (to, subject, html) => {
    let transporter = nodemailer.createTransport({
        host: config.get('emailHost'),
        port: 587,
        secure: false,
        auth: {
            user: config.get('emailUser'),
            pass: config.get('emailPassword')
        }
    });

    let info = await transporter.sendMail({
        from: '"URL Shortener" <noreply@urlshortener.com>',
        to,
        subject,
        html
    });

    console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
