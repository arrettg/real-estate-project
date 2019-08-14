require("dotenv").config();
const nodemailer = require("nodemailer");
module.exports = {
  send: (req, res, next) => {
    var transport = {
      host: "smtp.gmail.com",
      auth: {
        type: "login",
        user: process.env.USER,
        pass: process.env.PASS
      }
    };

    var transporter = nodemailer.createTransport(transport);

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take messages");
      }
    });
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
      from: name,
      to: "agentfinder01@gmail.com", //Change to email address that you want to receive messages on
      subject: "New Message from Contact Form",
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  }
};
