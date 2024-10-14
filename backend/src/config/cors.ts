// src/cors.ts
import cors from 'cors';

// const corsOptions = {
//   origin: [ 'http://frontend-dev:5173'], // Allow requests from all origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
// };

const corsMiddleware = cors();

export default corsMiddleware;
