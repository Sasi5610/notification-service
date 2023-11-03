const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "vsasi5678@gmail.com",
    pass: "hesp gasr ynrr qysh",
  },
  secure: true,
});
