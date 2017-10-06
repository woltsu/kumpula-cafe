var Menus = require("../models/menuModel");
var bodyParser = require("body-parser");


module.exports = function (app) {
    app.get("/api/menu/:date", function (req, res) {
        Menus.findOne({ "menu.date": req.params.date }, function (err, menu) {
            if (err) throw err;
            res.send(menu);
        });
    });
}