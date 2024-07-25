const express = require('express');
const PeerReview = require('../models/PeerReview');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create a peer review
router.post('/', authMiddleware, async (req, res) => {
  const { review, rating, reviewee } = req.body;
  try {
    const newReview = new PeerReview({
      review,
      rating,
      reviewer: req.user.id,
      reviewee
    });
    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all peer reviews for a user
router.get('/:userId', async (req, res) => {
  try {
    const reviews = await PeerReview.find({ reviewee: req.params.userId }).populate('reviewer', 'name');
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
