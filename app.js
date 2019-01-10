const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to db
mongoose.connect('mongodb://localhost/hero');
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
    res.send('Hello !');
});

app.use(bodyParser.json());

// init the routes
app.use('/api', require('./routes/api'));

// handle the errors
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message}); // 422 : unprocessable entity
});

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('you are now listening in port 3000');
});