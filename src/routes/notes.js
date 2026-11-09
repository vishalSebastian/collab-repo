const express = require('express');
const dayjs = require('dayjs');

const router = express.Router();

// In-memory "database" — resets every time the server restarts
let notes = [];
let nextId = 1;

// GET /notes — list all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// GET /notes/:id — get one note
router.get('/:id', (req, res) => {
  const note = notes.find((n) => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.json(note);
});

// POST /notes — create a note. Body: { "text": "..." }
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: '"text" is required' });

  const note = {
    id: nextId++,
    text,
    createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
  notes.push(note);
  res.status(201).json(note);
});

// DELETE /notes/:id — remove a note
router.delete('/:id', (req, res) => {
  const before = notes.length;
  notes = notes.filter((n) => n.id !== Number(req.params.id));
  if (notes.length === before) return res.status(404).json({ error: 'Note not found' });
  res.status(204).end();
});

module.exports = router;
