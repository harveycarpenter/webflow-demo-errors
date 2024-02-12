const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Your entry point, where Webpack will start bundling
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/, // Transpile both js and jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/, // Add this rule
          use: ['style-loader', 'css-loader'],
        },
      ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'webflow.json', to: '' }, // Copy webflow.json to the root of the output directory
      ],
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        // Pass public URL to HTML template:
        publicPath: '/', // This should match the output.publicPath
      }),
    new Dotenv() // Automatically load your .env file
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve your static files from here
    },
    compress: true, // Enable gzip compression
    port: 1337, // Serve on this port
    open: true // Open browser when server starts
  }
  
};
