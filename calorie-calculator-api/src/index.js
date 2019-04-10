import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from "./routes/auth"
import bodyParser from 'body-parser';

const app = express();
mongoose.connect("mongodb://localhost/calorie-calculator",  { useNewUrlParser: true });
app.use(bodyParser.json());


app.use('/api/auth', auth)



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(4545, () => console.log('Listing to port 4545'));
