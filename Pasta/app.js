const express = require('express');
const app = express();

const fs = require('fs');

const fileNameForJSON = './recipes.json';
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

const recipes = require(fileNameForJSON);

app.get('/recipe/:recipe', function (req, resp) {
    const recipe = req.params.recipe;
    const instructions = recipes[recipe];

    resp.send(instructions);
});

app.get('/recipes', function (req, resp) {
    const recipeKeys = Object.keys(recipes);
    resp.send(recipeKeys);
});

app.post('/recipe/new', function (req, resp) {
    const key = req.body.key;
    const instructions = req.body.instructions;
    recipes[key] = instructions;
    fs.writeFileSync(fileNameForJSON, JSON.stringify(recipes));
    resp.send(recipes);
});

module.exports = app;
