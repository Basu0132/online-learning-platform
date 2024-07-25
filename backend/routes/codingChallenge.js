const express = require('express');
const CodingChallenge = require('../models/CodingChallenge');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create a coding challenge
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, testCases } = req.body;
  try {
    const newChallenge = new CodingChallenge({
      title,
      description,
      testCases,
      createdBy: req.user.id
    });
    const challenge = await newChallenge.save();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all coding challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await CodingChallenge.find().populate('createdBy', 'name');
    res.json(challenges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
