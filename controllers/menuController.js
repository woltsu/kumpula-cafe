var Menus = require("../models/menuModel");

module.exports = function (app) {
    app.get("/menu", function(req, res) {
        res.render("menu");
    });
}