const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  
  entry: {
    main: './src/pages/main.js',
    },
 	  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
      test: /\.pug$/,
      use: 'pug-loader',
    },
    ],
  },
  plugins: [	
     new HtmlWebpackPlugin({
       filename: 'main.html',
       template: './src/pages/main.pug'
     }),
 	  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};