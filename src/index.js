// Load variables from .env into process.env (e.g. PORT)
require('dotenv').config();

const path = require('path');
const express = require('express');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Serve the web page (public/index.html) at http://localhost:PORT/
app.use(express.static(path.join(__dirname, '..', 'public')));

// Health check (JSON)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Notes API is running' });
});

// All /notes routes live in their own file
app.use('/notes', notesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
