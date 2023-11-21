require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl);
const db = mongoose.connection;

module.exports = db;