const url = require("url");

const parsedURL = url.parse("https://www.example.com/profile?name=barry&age=13");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

console.log(parsedURL);