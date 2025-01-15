import express from 'express';
import transactionRoutes from './routes/transactionRoutes.js';
import connectDB from './config/db.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
connectDB();

// API Routes
app.use('/api', transactionRoutes);

app.get('/', (req, res) => {
    res.send("Hello welcome to test api for mlm system")
}); 

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Connect to MongoDB

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
