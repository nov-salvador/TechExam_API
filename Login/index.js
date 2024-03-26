import express from 'express';
import process from 'process'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRouter from './routes/Login.js'
import seedUsers from './controllers/CreateUser.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;

//Mongodb
mongoose.connect(process.env.DB_URL)

// seedUsers();

app.set('port', port);

app.use(bodyParser.json());
app.use(cors())

app.use('/api', loginRouter)
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
