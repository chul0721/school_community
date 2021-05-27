import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import MongoDB from 'mongodb'

dotenv.config()
const DB = new MongoDB.MongoClient(`mongodb+srv://admin:${process.env.DB_PW}@cluster0.quy8v.mongodb.net/school?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
DB.connect().then(() => {
    userDB = DB.db('User').collection('users')
    boardDB = DB.db('Board').collection('boards')
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[DataBase]', ' MongoDB Atlas Connected')
})
const join = async (req: Request, res: Response) => {
    console.log(req.body)
    const userID = req.body.id
    const userPW = req.body.pw
    const userName = req.body.name
    if(await userDB.findOne({ id: userID })) {
        return res.status(400).send('Existing Account')
    }
}

export default join