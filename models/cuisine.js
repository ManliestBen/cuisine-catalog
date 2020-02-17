var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cuisineSchema = new Schema({
    title: String,
    calories: Number,
    mealType: String,
    recipeUrl: String,
    ingredients: [String]
});

module.exports = mongoose.model('Cuisine', cuisineSchema);