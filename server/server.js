var express = require('express');
var app = express();
var scraperController = require('./scraper');

app.use(express.static('client'));
// first sample route
app.get('/sample', scraperController.getData);
app.listen(3000);

module.exports = app;
