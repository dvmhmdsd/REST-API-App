const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello !');
});

// init the routes
app.use('/api', require('./routes/api'));

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('you are now listening in port 3000');
});