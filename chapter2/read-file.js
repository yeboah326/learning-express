// Check the number of times X occurs in myfile.txt
const fs = require("fs");

const options = { encoding: "utf-8"};

fs.readFile("./myfile.txt", options, function(error, data){
    if (error){
        console.error("Error reading file");
        return;
    }
    console.log(data.match(/x/gi).length + " letter X'x");
})

console.log("Hello world");