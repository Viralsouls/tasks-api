const express = require('express');
const app = express();
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Test route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});