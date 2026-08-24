const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;