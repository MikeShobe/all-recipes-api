var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  getData: function(req, res, next) {
  	
    var json = {};
    json.data = [];
    var links = [];
  	var foodItem = 'beef'; //FIX ME: will be equal to user input
    var counter = 100;
    for (var j = 1; j <= 5; j++) {
      	var url = 'http://allrecipes.com/search/default.aspx?qt=k&rt=r&origin=Recipe+Search+Results&vm=l&p34=SR_ListView&wt=' + foodItem + '&pqt=k&ms=0&fo=0&Page=' + j;
        // change URL to any site that you want
        request(url, function(error, response, html) {
            if (error){
            	console.log(error);//- want to check for errors first and console log them
            	return response.end();
            }
            //- look through response's html
            var $ = cheerio.load(html);
            

            for (var i = 0; i <= 40; i += 2) {
                var num = i;
                if (num < 10){
                    num = '0' + num;
                }
            	var recipeURL = $("#ctl00_CenterColumnPlaceHolder_rptResults_ctl" + num + "_ucResultContainer_ucRecipe_lnkTitle").attr('href');
            	if (recipeURL){
            		 request(recipeURL, function(error, response2, html2){
            			var apiObject = {};
                        var $ = cheerio.load(html2);

                        //add recipe name
                        apiObject.RecipeName = $('#itemTitle').text();

                        //add ingredients
                        var ingredients = [];
                        $('#lblIngName').each(function(index, elem) {
                            ingredients.push($(this).text());
                        });
                        apiObject.Ingredients = ingredients;

                        //add cook time
                        apiObject.CookTime = '';
            			if ($('#totalHoursSpan').text()) {
                            apiObject.CookTime += $('#totalHoursSpan').text();
            			}
                        if ($('#totalMinsSpan').text()) {
                            if (apiObject.CookTime){
                                apiObject.CookTime += ' ';
                            }
                            apiObject.CookTime += $('#totalMinsSpan').text();
                        }

                        //add rating
                        apiObject.Rating = $('div[itemprop="aggregateRating"]').children().children().children().attr('content');
                        
                        //add number of reviews
                        apiObject.ReviewsAmount = $('#btnScrollToReview').children().text();
                        links.push(apiObject);

                        console.log(counter --);
                        if (counter === 0){
                            res.send(JSON.stringify(links));
                        }
            		})

            	}

            }


        });
    }
    }
}

module.exports = scrapeController;