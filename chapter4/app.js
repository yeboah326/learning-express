const express = require("express");
const fs = require("fs");
const logger = require("morgan");
const path = require("path");
const { nextTick } = require("process");

const app = express();

app.use(logger("dev"))

// const staticPath = path.join(__dirname, "static");
// app.use(express.static(staticPath));

// app.use(function(request, response) {
//     response.status(404);
//     response.send("File not found!");
// })

app.use(function(request, response, next) {
    const filePath  = path.join(__dirname, "package.json");
    console.log(filePath);
    response.sendFile(filePath, function(error) {
        if (error){
            next(new Error("Error sending file!!"));
        }
    });
})

app.use(function(error, request, response, next){
    response.status(500);
    response.send("Internal Server Error.");
})

app.listen(3000, function () {
  console.log("Application starts on port 3000");
});
