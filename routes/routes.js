const express = require('express');
const { getAllVideos } = require('../controller/videoController');
const router = express.Router();

router.get('/', getAllVideos);

module.exports = router;