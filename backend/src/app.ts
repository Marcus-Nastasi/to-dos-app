import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import router from './routes/routes';
import helmet from 'helmet';

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(express.static(path.join(__dirname, '../../frontend/dist')));
        this.app.engine('html', require('ejs').renderFile);

        this.app.set('views', path.join(__dirname, '../../frontend/dist'))
        this.app.set('view engine', 'html');

        this.app.use(express.json());
        this.app.use(helmet());
    }

    private routes() {
        this.app.use(router);
    }

    public listen() {
        this.app.listen(3030);
    }
}

new App().listen();


