// this project uses the nodemailer library to send emails.
// options regarding switching to dedicated email services like 
// mailgun should be considered.

const nodemailer = require("nodemailer");
const { NODEMAILER_CONFIG } = require("../constants");

const nodemailerConfig = NODEMAILER_CONFIG;

const transporter = nodemailer.createTransport(nodemailerConfig);

async function sendMail({ from, to, subject, html }){
    try{
        await transporter.sendMail({
            from,
            to,
            subject,
            html,
        });
    } catch(e){
        throw new Error(`Could not send email: ${e.message}`)
    }
}

const CONFIG = {
    from: nodemailerConfig?.auth?.user,
}

module.exports = {
    sendMail,
    CONFIG
}

