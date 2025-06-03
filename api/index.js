// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const tasksRoutes = require('../routes/tasks');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/tasks', tasksRoutes);

// Export handler for Vercel
module.exports.handler = serverless(app);