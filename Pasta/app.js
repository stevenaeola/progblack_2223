const express = require('express');
const app = express();

const fs = require('fs');

const fileNameForJSON = "./recipes.json"
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
const { builtinModules } = require('module');

app.use(express.static(path.join(__dirname, 'client')));

let recipes = require(fileNameForJSON)


app.get('/recipe/:recipe', function(req, resp){
    const recipe = req.params.recipe;
    let instructions = recipes[recipe];

    resp.send(instructions);

})

app.get('/recipes', function(req, resp){
    let recipeKeys = Object.keys(recipes);
    resp.send(recipeKeys);
})

app.post("/recipe/new", function(req,resp){
    let key = req.body.key;
    let instructions = req.body.instructions;
    recipes[key] = instructions;
    fs.writeFileSync(fileNameForJSON, JSON.stringify(recipes));

    resp.send(recipes);
})

module.exports = app