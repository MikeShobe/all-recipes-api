var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  getData: function(req, res, next) {
  	
    var json = {};
    json.data = [];
    var links = [];
  	var foodItem = 'beef'; //FIX ME: will be equal to user input
  	var url = 'http://allrecipes.com/search/default.aspx?qt=k&rt=r&origin=Recipe+Search+Results&vm=l&p34=SR_ListView&wt=' + foodItem + '&pqt=k&ms=0&fo=0';
    // change URL to any site that you want
    request(url, function(error, res, html) {
        if (error){
        	console.log(error);//- want to check for errors first and console log them
        	return response.end();
        }
        //- look through response's html
        var $ = cheerio.load(html);
        var links = [];
        var apiObject = {};
        var counter = 16;
        for (var i = 0; i <= 40; i += 2) {
        	var recipeURL = $("#ctl00_CenterColumnPlaceHolder_rptResults_ctl" + i + "_ucResultContainer_ucRecipe_lnkTitle").attr('href');
        	if (recipeURL){
        		 request(recipeURL, function(error, response, html2){
        			var $ = cheerio.load(html2);
                    apiObject.itemTitle = $('#itemTitle').text();
        			if ($('#totalHoursSpan').text()) {
                        apiObject.totalHoursSpan = $('#totalHoursSpan').text();
        			}
                    if ($('#totalMinsSpan').text()) {
                        apiObject.totalMinsSpan = $('#totalMinsSpan').text();
                    }
                    apiObject.aggregateRating = $('div[itemprop="aggregateRating"]').children().children().children().attr('content');
                    apiObject.reviewsAmount = $('#btnScrollToReview').children().text();
                    links.push(apiObject);
                    counter --;
                    console.log(counter);
                    if (counter === 0){
                        // res.send(JSON.stringify(links));
                        console.log(links);
                    }
        		})

        	}

        }
        // console.log(links); 
    });
    }
}

module.exports = scrapeController;