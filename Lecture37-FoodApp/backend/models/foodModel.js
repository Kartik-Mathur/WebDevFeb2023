const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Food',foodSchema);