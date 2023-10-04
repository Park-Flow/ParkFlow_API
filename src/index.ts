import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import Router from './routers/router.js';
import handleErrorMiddleware from './middlewares/handleErrorMiddleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);
app.use(handleErrorMiddleware);

const PORT = +process.env.PORT! || 5000;

app.listen(PORT, () => console.log('Server running on port ' + PORT));
