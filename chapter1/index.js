const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", function(request, response) {
    response.send("Hello world!");
})

app.listen(PORT, function(){
    console.log("App has started");
})