const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

const recipes =
{
"carbonara": "Creamy sauce cheese good with penne",
"bolognese" : "Meaty tomato good with spaghetti"
}

app.get('/', function(req,res){
    res.render('./index.html');
    //__dirname should resolve to the project folder.
  });
  

app.get('/recipes', function(req, resp){
    const recipe = req.query.recipe;
    let instructions = recipes[recipe];
    resp.send(`<h1>This is a recipe for ${recipe}</h1><p>${instructions}</p>`);
})
var server = app.listen(3000, function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
