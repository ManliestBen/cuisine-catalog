var Cuisine = require('../models/cuisine');

module.exports = {
    new: newCuisine,
    create,
    index
}


function newCuisine(req, res) {
    res.render('cuisine/new');
}

function create(req, res) {
    req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
    if (req.body.ingredients) req.body.ingredients = req.body.ingredients.split(',');
    var cuisine = new Cuisine(req.body);
    cuisine.save(function(err) {
        if (err) return res.render('cuisine/new');
        console.log('Added cuisine to database: ' + cuisine);
        res.redirect('/cuisine');
    });
}

function index(req, res) {
    Cuisine.find({}, function(err, cuisine) {
        res.render('cuisine/index', {title: 'Cuisine List', cuisine});
    });
}