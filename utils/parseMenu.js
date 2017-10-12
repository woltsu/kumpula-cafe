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
            var meta = res.data[a].data[b].meta[0].join() + " " + res.data[a].data[b].meta[1].join();
            menu[date][price].push({
                name: res.data[a].data[b].name,
                info: res.data[a].data[b].nutrition,
                meta: meta
            });
        }
    }
    return menu;
}