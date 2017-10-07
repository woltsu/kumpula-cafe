module.exports = function (res) {
    var menu = {};
    for (var a = 0; a < res.data.length; a++) {
        for (var b = 0; b < res.data[a].data.length; b++) {
            var date = res.data[a].date;
            if (!(date in menu)) {
                menu[date] = {};
            }
            var price = res.data[a].data[b].price.name;
            if (!(price in menu[date])) {
                menu[date][price] = [];
            }
            menu[date][price].push(res.data[a].data[b].name);
        }
    }
    return menu;
}