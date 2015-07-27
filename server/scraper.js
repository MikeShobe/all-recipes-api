var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  getData: function(req, res, next) {

    // change URL to any site that you want
    request('http://www.producthunt.com/', function(error, response, html) {
        var $ = cheerio.load(html);
        // add code here

    });
  }
}

module.exports = scrapeController;