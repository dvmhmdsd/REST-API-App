const express = require('express');
const router = express.Router();

// get list of heroes from db
router.get('/heroes', (req, res) => {
   res.send({type: 'GET'}); 
});

// add a new hero
router.post('/heroes', (req, res) => {
    res.send({type: 'POST'}); 
});

// update a hero in db
router.put('/heroes/:id', (req, res) => {
    res.send({type: 'PUT'}); 
});

// delete a hero from db
router.delete('/heroes/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;