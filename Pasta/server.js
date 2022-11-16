const express = require('express');
const app = express();
app.use(express.static('client'));

const recipes =
{
"carbonara": "Creamy sauce cheese good with penne",
"bolognese" : "Meaty tomato good with spaghetti"
}

app.get('/recipes', function(req, resp){
    const recipe = req.query.recipe;
    let instructions = recipes[recipe];
    resp.send(`<h1>This is a recipe for ${recipe}</h1><p>${instructions}</p>`)

})
app.listen(8090);
