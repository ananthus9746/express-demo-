var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));
app.use(urlencodedParser);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/sum", function (req, res) {
  console.log("from post..", req.body);
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  let sum = num1 + num2;
  res.json(sum);
});
app.listen(8000, function () {
  console.log("Server Started");
});
