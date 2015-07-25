var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  getData: function(req, res, next) {
  	var apiObject = {};
  	var foodItem = 'pizza'; //FIX ME: will be equal to user input
  	var url = 'http://allrecipes.com/search/default.aspx?qt=k&rt=r&origin=Recipe+Search+Results&vm=l&p34=SR_ListView&wt=' + foodItem + '&pqt=k&ms=0&fo=0';
    // change URL to any site that you want
    request(url, function(error, response, html) {
        if (error){
        	console.log(error);//- want to check for errors first and console log them
        	return response.end();
        }
        //- look through response's html
        var $ = cheerio.load(html);
        var links = [];
        for (var i = 0; i <= 40; i += 2) {
        	var recipeURL = $("#ctl00_CenterColumnPlaceHolder_rptResults_ctl" + i + "_ucResultContainer_ucRecipe_lnkTitle").attr('href');
        	if (recipeURL){
        		 request(recipeURL, function(error, response, html2){
        			var $ = cheerio.load(html2);
        			console.log($('#itemTitle').text());
        			if ($('#totalHoursSpan')) {
        				console.log($('#totalHoursSpan').text());
        			}
        		});
        	}
        }
    });
  }
}

module.exports = scrapeController;