const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use("/api/users", require("./routes/api/users"));  // uses users.js whenever the base route is `/api/users`. The req comes from the users-api.js file fetch.

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => console.log(`Express app running on port ${port}.`));