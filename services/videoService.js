const videoModel = require("../models/videoModel");

async function fetchAllVideo() {
    return await videoModel.find();
}

module.exports = {fetchAllVideo};