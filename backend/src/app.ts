require('dotenv').config();
import express from 'express';
import path from 'path';
import router from './routes/routes';

const app = express();

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, '../../frontend/dist'))
app.set('view engine', 'html');


app.use(express.json());

app.use(router);

app.listen(3030, () => console.log('http://localhost:3030/'));





