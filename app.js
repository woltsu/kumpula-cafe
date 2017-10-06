var express = require("express");
var mongoose = require("mongoose");
var config = require("./config")
var app = express();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var menuController = require("./controllers/menuController");
var defaultController = require("./controllers/defaultController");
var setupController = require("./controllers/setupController");
var apiController = require("./controllers/apiController");
menuController(app);
defaultController(app);
setupController(app);
apiController(app);

mongoose.connect(config.getDbConnectionString());

app.listen(port);