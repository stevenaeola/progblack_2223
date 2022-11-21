var express = require('express')
var app = express()

app.get('/random/:max', function(req, resp){
  max = parseInt(req.params.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/r', function(req, resp){
  max = parseInt(req.query.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via query is ' + max + ' rand is ' + rand)
  html = `<html><body><h1>${rand}</h1></body></html>`
  resp.send(html)
})

app.listen(8090)