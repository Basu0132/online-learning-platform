const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create a course
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, content } = req.body;
  try {
    const newCourse = new Course({
      title,
      description,
      content,
      instructor: req.user.id
    });
    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// Get course details by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

