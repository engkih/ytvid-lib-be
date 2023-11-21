const videoModel = require("../models/videoModel");

async function fetchAllVideo() {
    return await videoModel.find({}, 'videoUrl');
}

module.exports = {fetchAllVideo};