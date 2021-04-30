const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

let htmlPageNames = ['colors&type', 'registration', 'room-details', 'search-page', 'sign-in'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}/${name}.pug`,
    filename: `${name}.html`,
  })
});


module.exports = {
  entry: {
    main: './src/pages/main.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        exclude: [
          path.resolve(__dirname, 'src/fonts'),
        ],
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
     filename: 'index.html',
     template: './src/pages/start.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ].concat(multipleHtmlPlugins),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};