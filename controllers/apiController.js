var Menus = require("../models/menuModel");
var bodyParser = require("body-parser");
var axios = require("axios");
var parseMenu = require("../utils/parseMenu");
var getMenu = require("../utils/getMenu");

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/api/menu/:date", function (req, res) {
        Menus.find({ "menu.date": req.params.date }, function (err, menu) {
            if (err) throw err;
            if (menu.length == 0) {
                console.log("No menus found");
                getMenu("https://messi.hyyravintolat.fi/publicapi/restaurant/11/", function () {
                    getMenu("https://messi.hyyravintolat.fi/publicapi/restaurant/10/", function () {
                        Menus.find({ "menu.date": req.params.date }, function (err, result) {
                            if (err) throw err;

                            var arr = [];
                            arr.push({
                                menu: {
                                    date: req.params.date,
                                    food: {},
                                    restaurant: "No food today"
                                }
                                
                            });
                            if (result.length == 0) {
                                res.send(arr);
                            } else {
                                res.redirect("/api/menu/" + req.params.date);
                            }
                        });
                    });
                });
            } else {
                console.log("Menu found");
                res.send(menu);
            }
        });
    });

    app.post("/api/menu", function (req, res) {
        Menus.create({
            menu: {
                date: req.body.restaurant,
                food: req.body.restaurant,
                restaurant: req.body.restaurant
            }
        });
    });

}