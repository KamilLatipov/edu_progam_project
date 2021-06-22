const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

const htmlPageNames = ['colors&type', 'registration', 'room-details', 'search-room', 'sign-in'];
const multipleHtmlPlugins = htmlPageNames.map((name) => new HtmlWebpackPlugin({
  chunks: ['main', `${name}`],
  template: `./src/pages/${name}/${name}.pug`,
  filename: `${name}.html`,
}));

module.exports = {
  entry: {
    'room-details': './src/pages/room-details/room-details.js',
    'colors&type': './src/pages/colors&type/colors&type.js',
    registration: './src/pages/registration/registration.js',
    'sign-in': './src/pages/sign-in/sign-in.js',
    'search-room': './src/pages/search-room/search-room.js',
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
          'css-loader',
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
      template: './src/pages/start.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new StylelintPlugin({
      fix: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ].concat(multipleHtmlPlugins),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
