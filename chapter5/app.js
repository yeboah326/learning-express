const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api_router")
const fs = require("fs")

const app = express();

const staticPath = path.resolve(__dirname, "static");

app.use(express.static(staticPath));

// app.get("/olivia", function (req, res) {
//   res.send("Welcome to Olivia's Homepage");
// });

// app.get("/users/:userid", function (req, res) {
//   const userId = parseInt(req.params.userid);
//   console.log(req.params);
//   res.status(200).send("User found");
// });

// app.get(/^\/books\/(\d+)$/, function (req, res) {
//   console.log(req.params);
//   res.status(200).end();
// });

// app.get("/search", function (req, res) {
//   console.log(req.query);
//   res.send("Great stuff").status(200).end();
// });

app.use("/api", apiRouter);

app.use(function (req, res) {
  res.status(404).send("Page not found");
});


app.listen(3000);
