const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    title: String,
    description: String,
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = mongoose.model('blogs',blogsSchema);