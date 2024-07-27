import nodemailer from "nodemailer"

export const sendEmail = async (to , subject , html) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports,
        service:"gmail",
        auth: {
            user: "alibasher2013@gmail.com",
            pass: "txsbssdldvcshkef",
        }
    });
    
    const info = await transporter.sendMail({
        from: '"Ali Hesham" <alibasher2013@gmail.com>',
        to: to ? to: "" ,
        subject: subject ? subject:"",
        html: html ? html:"",
    })
    console.log(info);

    if(info.accepted.length){
        return true;
    }
    return false;
}

