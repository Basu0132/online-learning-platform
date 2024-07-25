const mongoose = require('mongoose');

const PeerReviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('PeerReview', PeerReviewSchema);
