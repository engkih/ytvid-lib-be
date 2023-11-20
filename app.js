require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.SERVER_PORT;
// const cors = require('cors');
// const routes = require('./routes/routes');
// const db = require('./database/db_connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(cors());
// app.use('/api', routes);

app.listen(port, () => console.log(`API Server running on port ${port}`));
