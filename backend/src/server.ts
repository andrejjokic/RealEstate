import express from 'express';
import cors from 'cors'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import userRouter from './routes/user.routes';
import estateRouter from './routes/estate.routes';

const app = express();

app.use(cors())

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/real_estate");

const conn = mongoose.connection;
conn.once('open',()=>{
    console.log('Uspesna konekcija');
});

const router = express.Router();
router.use('/users', userRouter);
router.use('/estates', estateRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));