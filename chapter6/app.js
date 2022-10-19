const express = require("express");

const app = express();

app.get("/rand-int", function (req, res, next) {
  const minNumber = parseInt(req.query.min);
  const maxNumber = parseInt(req.query.max);

  if (isNaN(minNumber) || isNaN(maxNumber)) {
    res.status(400).json({ error: "Bad request" })
    return;
  }

  const random = Math.round(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
  res.status(200).json({ random_number: random });
});

app.use(function (req, res) {
  res.json({ message: "Route not found" });
  res.status(404).end();
});

app.listen(3000, function () {
  console.log("Application has started on port 3000");
});
