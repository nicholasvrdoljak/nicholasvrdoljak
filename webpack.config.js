// require('dotenv').config();
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const options = {
    devTool: 'source-map',
    uglify: {}
}


module.exports = {
    entry: ['babel-polyfill', './client/src/index.jsx'],
    output: {
        filename: './client/public/bundle.js'
    },
    watch: true,
    devtool: options.devTool,
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                }
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: 65,
                            },
                            svggo: {},
                            webp: {
                                quality: 65
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: 65,
                            },
                            svggo: {},
                            webp: {
                                quality: 65
                            }
                        }
                    },
                ],
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            REACT_APP_CHAT_PORT: 'change_this', 
        })
    ]
}