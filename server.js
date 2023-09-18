const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

const app = express();
const key = process.env.KEY
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require("./config/checkToken"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/books", require("./routes/api/books"));
app.use("/api/results", async (req, res) => {
    const { search, num } = req.query;
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${num}&key=${key}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching results", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => console.log(`Express app running on port ${port}.`));