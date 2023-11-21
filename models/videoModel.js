const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoUrl: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('videoModel', videoSchema, 'videos');