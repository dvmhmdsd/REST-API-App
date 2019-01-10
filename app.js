const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to db
mongoose.connect('mongodb://localhost/hero');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello !');
});

// init the routes
app.use('/api', require('./routes/api'));

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('you are now listening in port 3000');
});