const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: {
    main: './src/pages/main.js',
    },
 	  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
      test: /\.pug$/,
      use: 'pug-loader',
    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        },
      },
    ],
  },
  plugins: [	
     new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './src/pages/index.pug'
     }),
 	  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};