const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    blogId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'blogs'
        }
    ]
});

module.exports = mongoose.model('users',userSchema);