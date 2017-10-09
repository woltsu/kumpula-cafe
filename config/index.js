var configValues = require("./config.json");

module.exports = {
    getDbConnectionString: function () {
        return "mongodb://" + configValues.uname +
            ":" + configValues.pwd +
            "@ds133054.mlab.com:33054/kumpula-cafe";
    }
}