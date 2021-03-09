import express from 'express';

import routes from './routes'
class App {
    express: express.Application

    constructor() {
        this.express = express();
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(routes)
    }
}

export default new App().express;
