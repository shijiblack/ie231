var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '15520744@gm.uit.edu.vn',
    pass: '3216485598'
  }
});

var mailOptions = {
  from: '15520744@gm.uit.eu.vn',
  to: 'shijiblack97@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
