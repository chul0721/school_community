import express from 'express';
import * as MongoDB from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

let boardDB, userDB;
let port = 3001;
const DBClient = new MongoDB.MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.quy8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

DBClient.connect().then(() => {
    boardDB = DBClient.db('board').collection('main');
    userDB = DBClient.db('user').collection('main');
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[DB]',' Connected to DataBase');
});

app.post('/api/join', async (req:any, res:any, next:any) => {
    boardDB.findeOne
    return 10
})

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`);
})