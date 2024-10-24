import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "ownyanteh@gmail.com",
        pass: process.env.PERS_GMAIL_APPPASS
    },
    from: "POSTIIZE"
})