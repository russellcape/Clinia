const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

let pageToVisit = "http://www.google.com";
console.log("Visiting page " + pageToVisit);

request(pageToVisit, function(error, response, body) {
    if (error) {
        console.log("Error: " + error);
    }
    // Check status code (200 is HTTP OK)
    console.log("Status code: " + response.statusCode);
    if (response.statusCode === 200) {
        // Parse the document body
        const $ = cheerio.load(body);
        console.log("Page title: " + $('title').text());
    }
})