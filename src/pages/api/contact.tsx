import nodemailer from 'nodemailer'
const sendgridTransport = require('nodemailer-sendgrid-transport')
import { NextApiRequest, NextApiResponse } from 'next'

const email = process.env.MAILADRESS

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY,
        },
    })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { senderMail, name, content } = req.body

        if (!senderMail.trim() || !name.trim() || !content.trim()) {
            return res.status(403).send('')
        }
        const message = {
            from: email,
            to: senderMail,
            subject: `${name}`,
            html: `<p><b>Esse é seu Email:</b> ${senderMail}<br /><b>Conteúdo da sua mensagem:</b> ${content}</p>
            <b>Envio de mensagem criado com Node Mailer e entregue por SendGrid</b>`,
            replyTo: senderMail,
        }
        transporter.sendMail(message)

        return res.send('')
    } catch (err) {
        return res.json({
            error: true,
            // message: err.message,

            // caso der erro excluir linha de cima
        })
    }
}
