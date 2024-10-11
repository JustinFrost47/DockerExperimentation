// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import phoneRoutes from './routes/phoneRoutes'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/', phoneRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
