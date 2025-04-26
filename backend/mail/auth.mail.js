import nodemailer from "nodemailer"

const mailSender=async(email,name)=>{
    try {
        const auth=nodemailer.createTransport({
            service:"gmail",
            secure:true,
            port: 465,
            auth:{
                user:"your email for sending  mail",
                pass:"ggqovdprhdyxopqv"
            }
        });
        const receiver={
            from:"jezorb0212@gmail.com",
            to:email,
            subject:"user registered to the chat-app",
            text:`hello ${name}. You are now the part of us.`
        }
        
        auth.sendMail(receiver,(error,emailResponse)=>{
            if(error)
                throw error
            console.log("message sent..")
        })
    } catch (error) {
        console.log(error)
    }
}

export default mailSender