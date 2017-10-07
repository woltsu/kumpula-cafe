module.exports = {
    entry: {
        weeklyMenu: __dirname + "/public/js/weekly-menu/index.js",
        dailyMenu: __dirname + "/public/js/daily-menu/index.js"
    },
    output: {
        filename: "[name].transformed.js",
        path: __dirname + "/public/build"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".ejs"]
    }
}