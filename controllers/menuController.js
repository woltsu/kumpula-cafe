module.exports = function (app) {
    app.get("/daily-menu", function(req, res) {
        res.send("Daily menu");
    });

    app.get("/weekly-menu", function(req, res) {
        res.render("index");
    });
}