const path = require('path')
module.exports = {
  mode: 'development', // '构建模式'
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    path: path.join(__dirname, './www'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(png|jpg|gif|svg|ttf)$/,
      use: 'url-loader?limie=16940'
    }, {
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
          plugins: [
            'transform-decorators-legacy',
            'add-module-exports',
            'transform-class-properties',
            'transform-object-rest-spread',
          ]
        }
      }
    }]
  },
  devServer: {
    host: '127.0.0.1',
    port: 8000,
    compress: true,
    contentBase: './www',
    historyApiFallback:{
      index: './index.html'
    }
  }
}