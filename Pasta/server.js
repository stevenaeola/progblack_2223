const express = require('express');
const app = express();
app.use(express.static('client'));

const recipes =
{
"carbonara": "Creamy sauce cheese good with penne",
"bolognese" : "Meaty tomato good with spaghetti"
}

app.get('/recipe/:recipe', function(req, resp){
    const recipe = req.params.recipe;
    let instructions = recipes[recipe];
    resp.send(instructions);

})

app.get('/recipes', function(req, resp){
    let recipeKeys = Object.keys(recipes);
    resp.send(recipeKeys);
})

app.listen(8090);
