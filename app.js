require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.SERVER_PORT;
// const cors = require('cors');
const router = require('./routes/routes');

//DB CONNECTION SECTION
const db = require('./database/db_connection');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=>console.log('Coonected to MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(cors());
app.use('/api', router);

app.listen(port, () => console.log(`API Server running on port ${port}`));
