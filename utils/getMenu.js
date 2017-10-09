var axios = require("axios");
var parseMenu = require("../utils/parseMenu");
var Menus = require("../models/menuModel");

module.exports = function (uri, callback) {
    axios.get(uri)
        .then(function (response) {
            var allMenus = parseMenu(response.data);
            console.log(allMenus);
            Object.keys(allMenus).forEach(function (date) {
                Menus.findOne({
                    "menu.date": date,
                    "menu.restaurant": response.data.
                        information.restaurant
                }, function (err, menu) {
                    if (!menu) {
                        Menus.create({
                            menu: {
                                date: date,
                                food: allMenus[date],
                                restaurant: response.data.information.restaurant
                            }
                        });
                    }
                });
            });
            callback();
        });
}
