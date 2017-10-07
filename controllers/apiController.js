var Menus = require("../models/menuModel");
var bodyParser = require("body-parser");
var axios = require("axios");

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/api/menu/:date", function (req, res) {
        Menus.findOne({ "menu.date": req.params.date }, function (err, menu) {
            if (err) throw err;

            if (!menu) {
                axios.get("https://messi.hyyravintolat.fi/publicapi/restaurant/11/")
                    .then(function (response) {
                        res.send({
                            food: "food"
                        });
                    });
            } else {
                res.send(menu);
            }
        });
    });

    app.post("/api/menu", function(req, res) {
        var newMenu = Menus({
            menu: res.menu
        });
    });

}