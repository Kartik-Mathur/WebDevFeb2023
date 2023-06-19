const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  imageUrl: String,
});

module.exports =  mongoose.model('Food', foodSchema);