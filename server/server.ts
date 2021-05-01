import express from 'express'
import dotenv from 'dotenv'
import router from './routes/Router'
import cors from 'cors'
import bodyParser from 'body-parser'
import MongoDB from 'mongodb'

dotenv.config()
let userDB, boardDB
const app = express()
const port = 3001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(router)
const DB = new MongoDB.MongoClient(`mongodb+srv://admin:${process.env.DB_PW}@cluster0.quy8v.mongodb.net/school?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
DB.connect().then(() => {
    userDB = DB.db('User').collection('users')
    boardDB = DB.db('Board').collection('boards')
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[DataBase]', ' MongoDB Atlas Connected')
})

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`)
})

export default {
    userDB,
    boardDB
}