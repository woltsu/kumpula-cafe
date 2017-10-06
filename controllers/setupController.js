var Menus = require("../models/menuModel");

module.exports = function(app) {
    app.get("/api/setupMenu", function(req, res) {
        var testMenus = [
            {
                menu: {
                    date: "Ma 02.10",
                    edullisesti: ["ruokaa", "lisää ruokaa"],
                    maukkaasti: ["parempaa ruokaa", "lisää parempaa ruokaa"],
                    makeasti: ["sokeria"]
                }
            }
        ];

        Menus.create(testMenus, function (err, results) {
            res.send(results);
        });
    });  
}