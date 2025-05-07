const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  title: {
    type: String
  },
  picture: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  client: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
