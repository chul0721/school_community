import express from 'express';
import * as MongoDB from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

<<<<<<< HEAD:server/server.ts
let boardDB:any, userDB:any;
=======
let boardDB, userDB;
>>>>>>> 2b5e8cb148a51f94373340a5c519a65c05eab297:server.ts
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
<<<<<<< HEAD:server/server.ts
    // await userDB.findeOne()
    console.log(req.body)
    res.end('asdf')
=======
    boardDB.findeOne
    return 10
>>>>>>> 2b5e8cb148a51f94373340a5c519a65c05eab297:server.ts
})

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`);
})