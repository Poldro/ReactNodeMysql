module.exports = sendEmails;

const nodemailer = require('nodemailer');

async function sendEmails(emailTo, objectEmail, html) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'energylabtest2020@gmail.com', // generated ethereal user
        pass: '12345AAaa', // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Energy Lab Testing 👻" <energylabtest2020@gmail.com>', // sender address
      to: emailTo, // list of receivers
      subject: objectEmail, // Subject line
      html: html, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }