# Unit 9 building an API

##Summary
Node-API is the beginning of an incredible project - you will be constructing an Application Programming Interface (API) from scratch. This section will be broken down into these components:
- Unit 9 : Node-API
  Scrape data
- Unit 10: Angular
  Create a launch page for your API. This page will contain a home page, documentation page, and a guide to get started
- Unit 11: Authentication
  Users can login and logout
- Unit 11: Database
  Store user account information



In this challenge, we will scrape data from a website, parsing the content. A user should be able to make a GET request to one of your routes, and your server should respond with the data you scraped.

## APIs

>We're entering a new world in which data may be more important than software -Tim O'Reilly

Creating JSON apis allows us to do something really awesome. We can separate how our data is **created** and sent out from how it is **displayed** and used. 

Figuring out how to send out json data in response to HTTP requests is a crucial part of modern web applications. Everything from Twitter, to Etsy to Pinterest use internal APIs to release their content. 

This means that you can use React to display your JSON data one day, and then a year from now switch to something else without having to refactor your **server-side** code; after all, it's just JSON data.

---

In this challenge, we're going to be scraping an external site, parsing their html, converting it into JSON and returning that JSON data.

# Web scraping
Web scraping is making an HTML request and pulling out data from the response. We web scrape all the time with our eyes, we just don't know that we're doing it.
We go to a web page and parse it to extract the data that is relevant to us.

> How Can Mirrors Be Real If Our Eyes Aren't Real - Jaden Smith

We are going to use a module called [cheerio](https://github.com/cheeriojs/cheerio) to help us do this. Cheerio allows developers to interact with pages on the server similar to the way they interact with the DOM using jQuery. There are tons of great guides out there to help you figure it out, and their docs are very helpful as well.

##Getting started

1. Figure out with your partner what site you want to scrape/what data you want to return.
1. Run npm install in your terminal to install external dependencies.
1. Complete the assignment in server/scraper.js.
1. To start your server run npm start.

###Bonus

1. Have your API gather data from more than one site.
  * Example: a GET request to /cats gets a list of cats pictures from three different sites
1. Add additional routes 
  * Examples: a GET request to /cats, /dogs, /people


##How do I test if my answer is correct?
There are two ways to test your code:

1. Visit your route in your browser. The browser sends an http GET request to your route. Your server should respond with the data you scraped.

2. Run ```npm test``` in your terminal




# Links and Resources
<https://blog.hartleybrody.com/web-scraping/>
