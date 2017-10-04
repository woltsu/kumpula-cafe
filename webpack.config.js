module.exports = {
    entry: {
        index: __dirname + "/public/js/index.js",
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