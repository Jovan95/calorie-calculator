import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from "./routes/auth";
import signup from "./routes/signup";
import profile from "./routes/profile";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

dotenv.config()
const app = express();
console.log(dotenv.config())
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL,  { useNewUrlParser: true });
app.use(bodyParser.json());


app.use('/api/auth', auth);
app.use('/api/signup', signup);
app.use('/api/profile', profile)

app.get('/*', (req, res) => {
  console.log('req 2', req);
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(4545, () => console.log('Listing to port 4545'));
