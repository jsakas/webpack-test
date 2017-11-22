const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 7000
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
          loader: 'file-loader'
        }, {
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
};