const { fetchAllVideo } = require("../services/videoService");

async function getAllVideos(req, res) {
    try {
        const allVdeos = await fetchAllVideo();
        res.status(200).json(allVdeos);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = {getAllVideos};