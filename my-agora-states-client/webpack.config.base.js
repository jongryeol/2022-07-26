const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("")

module.exports = {
    target: ["web", "es5"],
    entry: [
        "./src/index.js",
        "react-hot-loader/path"
    ]
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[fullhash].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loder: "babel-loader"
                }
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
                template: "public/index.html"
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            $:'jquery'
        })
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },

} 