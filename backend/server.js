const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes

const recipeRoutes = require('./routes/recipe.js');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware

app.use(recipeRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://recipe:recipe@recipe.rbw6s7l.mongodb.net/recipe_db?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});