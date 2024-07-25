const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/online_learning_platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const auth = require('./routes/auth');
const course = require('./routes/course');
const liveCodingSession = require('./routes/liveCodingSession');
const codingChallenge = require('./routes/codingChallenge');
const peerReview = require('./routes/peerReview');


// Middleware
app.use('/api/auth', auth);
app.use('/api/courses', course);
app.use('/api/live-coding-sessions', liveCodingSession);
app.use('/api/coding-challenges', codingChallenge);
app.use('/api/peer-reviews', peerReview);


// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
