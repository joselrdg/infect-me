const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    image: { // mirar si subir enlace o archivo o video...
        type: String
    },
    tags: [String]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;