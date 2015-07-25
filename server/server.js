var express = require('express');
var app = express();
var scraperController = require('./scraper');

// first sample route
app.get('/scraper', scraperController.getData)

app.listen(3000);

module.exports = app;
