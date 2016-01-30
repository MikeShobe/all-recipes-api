var express = require('express');
var app = express();
var scraperController = require('./scraper');


app.get('/', scraperController.getData)

app.listen(3000);

module.exports = app;
