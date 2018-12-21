var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: 'assets/[name].[ext]'}
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: 'assets/fonts/[name].[ext]'}
                    }
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './frontend/index.html'}),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
};