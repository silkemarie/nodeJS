//a file that exports a function for sending emails. 

"use strict";
import nodemailer from "nodemailer";
//pga "type" : "module" kan vi ikke gøre som https://nodemailer.com/about/ skriver
//i stedet for at bruge require kan vi så bruge import

export default async function handleEmail() {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'frederic.gleason@ethereal.email',
            pass: 'WRxWVXqXq9yNPjQdER'
        }
    });

    //user og pass er generated på https://ethereal.email/create


let info = await transporter.sendMail({
    from: '"Frederic Gleason" <frederic.gleason@ethereal.email>', // sender address
    to: "ernesto.morar@ethereal.email", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello Ernesto?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

handleEmail().catch(console.error);
