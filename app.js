var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var indexController = require("./controllers/indexController");
indexController(app);

app.listen(port);