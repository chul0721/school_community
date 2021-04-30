import express from 'express'
import dotenv from 'dotenv'
import router from './routes/Router'
import cors from 'cors'

dotenv.config({path: '../.env'})
const app = express()
const port = 3001
app.use(cors())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`);
})