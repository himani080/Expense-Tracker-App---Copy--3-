import express from 'express';
import cors from 'cors';
import { connectDB } from './DB/Database.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import transactionRoutes from './Routers/Transactions.js';
import userRoutes from './Routers/userRouter.js';
  
dotenv.config({ path: './config/config.env' });
const app = express();
// Middleware
// app.use(
//   cors({
//     origin: '*', // Accept requests from specified origins
//     credentials: true,       // Allow cookies and credentials
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
//   })
// );
// app.use(cors({ origin: "http://localhost:3000" })); 
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:5173',
    'https://your-frontend-deployed-url.com' 
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Enable preflight requests for all routes
app.options('*', cors());



// This should allow the preflight OPTIONS requests to pass

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
connectDB();

// Routers
app.use('/api/v1', transactionRoutes);
app.use('/api/auth', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
