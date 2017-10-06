var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var menuSchema = new Schema({
    menu: Object
});

var Menus = mongoose.model("Menus", menuSchema);

module.exports = Menus;