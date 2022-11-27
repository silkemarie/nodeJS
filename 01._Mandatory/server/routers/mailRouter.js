import { Router } from 'express';
import nodemailer from 'nodemailer';

const mailRouter = Router()

mailRouter.post("/api/waitlist", async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email;
    
    handleEmail(email)
    res.send({ message: "mail besked" });
   
})


async function handleEmail(email){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'santina.bechtelar25@ethereal.email',
            pass: 'HQvA38tfCHW1VU2dtM'
        }
    });
    
        let info = await transporter.sendMail({
            from: '"Santina Bechtelar" <santina.bechtelar25@ethereal.email>',
            to: email,
            subject: "Welcome to our waitlist",
            text: "We've succesfully signed you up for our waitlist"
          });
    
    
    
    console.log("Message sent: %s", info.messageId);
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    }

export default mailRouter