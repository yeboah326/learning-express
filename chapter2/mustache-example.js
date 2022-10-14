const mustache = require("mustache");

const result = mustache.render("Hi {{ first_name }} {{ middle_name }} {{ last_name }}, how may I help you?" ,{
    first_name: "Gideon",
    middle_name: "Yeboah",
    last_name: "Asante"
})

console.log(result);