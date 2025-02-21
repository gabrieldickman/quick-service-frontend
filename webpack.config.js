const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpa a pasta dist antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Caminho para o HTML base
      filename: 'index.html',   // Nome do arquivo gerado na pasta dist
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        REACT_APP_BACKEND_IP: process.env.REACT_APP_BACKEND_IP || 'localhost:8000',
      }),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    watchFiles: {
      paths: ['src/**/*', 'index.html'],
    },
  },
};