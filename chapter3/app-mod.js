const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "public");

const PASSWORD = "FASF;LQKJ320R92FS";

app.use(logger("short"));

app.use(express.static(publicPath));

app.get("/",function(request, response) {
    response.end("Welcome to the homepage!")
})

app.get("/about", function(request, response){
    response.end("Welcome to the about page")
})

app.get("/weather", function(request, response){
    response.send("The weather is GREAT");
})

app.use(function(request, response){
    response.statusCode = 403;
    response.end("404!");
})

http.createServer(app).listen(3000)