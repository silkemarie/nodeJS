import { Router } from 'express'
import nodemailer from 'nodemailer'

const mailRouter = Router()

mailRouter.post("/api/welcome", async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email;
    return email;

    handleEmail()
})


async function handleEmail(email){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'pinkie15@ethereal.email',
            pass: 'KDFAXpr6Rt3H1jJxuu'
        }
    });
    
        let info = await transporter.sendMail({
            from: '"Pinkie Moen" <pinkie15@ethereal.email>',
            to: email,
            subject: "Hello ✔",
            text: "Jeg kunne godt bruge en Croissant",
            html: "<b>Hello world?</b>",
          });
    
    
    
    console.log("Message sent: %s", info.messageId);
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    }

export default mailRouter