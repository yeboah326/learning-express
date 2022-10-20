const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const session = require("express-session")
const flash = require("connect-flash")

const routes = require("./routes");
const passport = require("passport");

const setUpPassport = require("./setuppassport");

// Create the app instance
const app = express();

// Connect to the mongo database
mongoose.connect("mongodb://ultron:password@0.0.0.0:27017/")
setUpPassport();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// Makes parsing simpler and more secure
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());
app.use(session({
    secret: "6adc3c83d2b64be2589a9af1fe2f87b4b44c89cfbbc7e2177ebb70e9456be107",
    resave: true,
    saveUninitialized: true
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
})