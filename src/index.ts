var compression = require('compression')
import dotenv from 'dotenv';
import express, { Express, json, urlencoded } from 'express';
import helmet from 'helmet';
import apiRouter from './api/'
import { mongoClient } from "./clients/mongodb";
import { redirect } from './redirect';
import { checkUrlCache, checkValidUrl } from './middlewares/urls';
import { corsMiddleware } from './middlewares/cors';
import { keyAuthMiddleware } from './helpers';

dotenv.config();
mongoClient();
const app: Express = express();
app.use(helmet())
app.use(compression())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(corsMiddleware)
app.get('/:url', [checkUrlCache, checkValidUrl], redirect)
app.use(keyAuthMiddleware);
app.use('/api/v1', apiRouter)



const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});