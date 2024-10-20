// src/app.ts
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import corsMiddleware from './config/cors';

import { initializeRoutes } from './routes';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(corsMiddleware)
app.use(express.json());
initializeRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
