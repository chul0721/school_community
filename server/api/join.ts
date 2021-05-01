import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import userDB from '../server'

const join = (req: Request, res: Response) => {
    console.log(req.body)
    res.send('POST request to the homepage')
}

export default join