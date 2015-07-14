#Angular-API

##Summary
Angular-API will teach you the fundamentals of Angular


In this challenge, we will scrape data from a website, parsing the content. A user should be able to make a GET request to one of your routes, and your server should respond with the data you scraped.

We will be working with a module called [cheerio](https://github.com/cheeriojs/cheerio). Cheerio allows users to interact with pages on the server similar to the way they interact with the DOM using jQuery.

##How do I get started?
1. Run ```npm install``` in your terminal to install external dependencies.

1. Complete the assignment in ```server/scraper.js```.

1. To start your server run ```npm start```.

**BONUS**
1. Have your API gather data from more than one site.
  - Example: a GET request to /cats gets a list of cats pictures from three different sites

1. Add additional routes
  - Examples: a GET request to /cats, /dogs, /people


##How do I test if my answer is correct?
There are two ways to test your code
1. Visit your route in your browser. The browser sends an http GET request to your route. Your server should respond with the data you scraped.

1. Run ```npm test``` in your terminal