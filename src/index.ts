import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import authRouter from './routes/authRouter';
import usersRouter from './routes/usersRouter';
import * as dotenv from 'dotenv';

const app = express();

dotenv.config({ path: __dirname + '/.env' });
const MONGO_URL = process.env.MONGO_DB_URI;

app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
	console.log('Server running on http://localhost:8080/');
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/authentication', authRouter());
app.use('/users', usersRouter());
