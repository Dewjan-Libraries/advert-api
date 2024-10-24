import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "ownyanteh@gmail.com",
        pass: process.env.PERS_GMAIL_APPPASS
    },
    from: "ownyanteh@gmail.com"
})