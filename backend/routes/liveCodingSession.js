const express = require('express');
const LiveCodingSession = require('../models/LiveCodingSession');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create a live coding session
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, startTime, endTime } = req.body;
  try {
    const newSession = new LiveCodingSession({
      title,
      description,
      instructor: req.user.id,
      startTime,
      endTime
    });
    const session = await newSession.save();
    res.json(session);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all live coding sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await LiveCodingSession.find().populate('instructor', 'name');
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
