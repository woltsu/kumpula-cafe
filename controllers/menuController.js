var Menus = require("../models/menuModel");

module.exports = function (app) {
    app.get("/daily-menu", function(req, res) {
        res.render("daily-menu");
    });

    app.get("/weekly-menu", function(req, res) {
        res.render("weekly-menu");
    });
}