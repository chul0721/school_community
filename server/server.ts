import express from 'express'
import router from './routes/Router'
import cors from 'cors'
import bodyParser from 'body-parser'
import MongoDB from 'mongodb'

const app = express()
const port = 3001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(router)

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`)
})