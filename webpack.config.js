module.exports = {
    entry: {
        menu: __dirname + "/public/js/menu/index.js"
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