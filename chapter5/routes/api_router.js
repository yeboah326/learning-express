const express = require("express");

const ALLOWED_IPS = ["127.0.0.1", "123.456.7.8", "::1"];

const api = express.Router();

api.use(function (req, res, next) {
  const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
  if (!userIsAllowed) {
    res.status(401).json({ message: "User is not authorized" });
  } else {
    next();
  }
});

api.get("/users", function(req, res){
    // console.log("Get all users");
    res.status(200).json({message: "Get all users"});
})

api.get("/user", function(req, res){
    // console.log("Get a single user")
    res.status(200).json({message: "Get a single user"});
})

module.exports = api;