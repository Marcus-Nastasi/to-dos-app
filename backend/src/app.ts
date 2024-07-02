require('dotenv').config();
import express from 'express';
import path from 'path';
import router from './routes/routes';
import helmet from 'helmet';

const app = express();

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, '../../frontend/dist'))
app.set('view engine', 'html');

app.use(express.json());

app.use(router);

app.use(helmet());

app.listen(3030, () => console.log('http://192.168.0.76:3030/'));





