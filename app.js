var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var menuController = require("./controllers/menuController");
var defaultController = require("./controllers/defaultController");
menuController(app);
defaultController(app);

app.listen(port);