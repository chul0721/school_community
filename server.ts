import express from 'express';
import * as MongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import router from './router/main';

dotenv.config();
const app = express();
router(app)

let boardDB, userDB;
let port = 5000;
const DBClient = new MongoDB.MongoClient(`mongodb+srv://admin:${process.env.DB_PW}@cluster0.quy8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

DBClient.connect().then(() => {
    boardDB = DBClient.db('board').collection('main');
    userDB = DBClient.db('user').collection('main');
    console.log('Connected to DataBase')
});

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log(`Server on : ${port}`);
})