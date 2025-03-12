const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'production', // Enable production optimizations
    entry: './src/js/index.js', // Entry point
    output: {
        filename: 'js/[name].[contenthash].js', // Cache-busting filenames
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans /dist before each build
        publicPath: '/', // Ensure proper asset paths
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JS
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // Process CSS
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/, // Process SCSS
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/, // Image assets
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // Inline images < 8kb
                    },
                },
                generator: {
                    filename: 'images/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/, // Font assets
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash][ext]',
                },
            },
        ],
    },
    optimization: {
        minimize: true, // Enable minification
        minimizer: [
            new TerserPlugin({ parallel: true }), // Minify JS
            new CssMinimizerPlugin(), // Minify CSS
        ],
        splitChunks: {
            chunks: 'all', // Code splitting for vendor chunks
        },
        runtimeChunk: 'single', // Optimize runtime chunk for caching
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Base HTML
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // Extracted CSS
        }),

        //TODO: Fix the env variable
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                REACT_APP_BACKEND_IP: process.env.REACT_APP_BACKEND_IP || 'service-api.brasildigital.net.br',
            }),
        }),
    ],
    resolve: {
        extensions: ['.js'], // Resolve JS files
    },
    performance: {
        hints: 'warning', // Warn if asset sizes exceed limits
    },
};
