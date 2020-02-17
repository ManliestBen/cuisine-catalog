var Cuisine = require('../models/cuisine');

module.exports = {
    new: newCuisine
}


function newCuisine(req, res) {
    res.render('cuisine/new');
}