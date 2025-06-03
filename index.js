// index.js
const express = require('express');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});