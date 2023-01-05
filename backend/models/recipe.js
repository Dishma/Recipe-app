const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

    
    rid : {
        type : String,
        required : true
    },
    recipeName : {
        type : String,
        required : true
    },
    ingredients: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

})

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;