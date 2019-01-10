const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

// get list of heroes from db
router.get('/heroes', (req, res, next) => {
   res.send({type: 'GET'}); 
});

// add a new hero
router.post('/heroes', (req, res, next) => {
    /* let hero = new Hero(req.body);
    hero.save(); */
    // OR
    Hero.create(req.body).then((hero) => { // this also creates an instance from Hero and then save it to the db
        res.send(hero);
    }).catch(next); 
});

// update a hero in db
router.put('/heroes/:id', (req, res, next) => {
    res.send({type: 'PUT'}); 
});

// delete a hero from db
router.delete('/heroes/:id', (req, res, next) => {
    res.send({type: 'DELETE'});
});

module.exports = router;