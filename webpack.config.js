const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = 'static/'

module.exports = (env) => {
  return {
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
            loader: 'file-loader',
            options: {
              outputPath: outputPath
            }
          }, {
            loader: 'sass-loader',
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: outputPath
            }
          }],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html')
      })
    ]
  }
};
