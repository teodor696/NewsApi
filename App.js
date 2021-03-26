import express from 'express';
import { appPort } from './config.js';
import newsRouter from './controllers/news-controller.js';

const app = express();

app.use('/news', newsRouter);

app.listen(appPort, () => console.log('listening on port 3000'));