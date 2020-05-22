const path = require('path')
module.exports = {
  mode: process.env.NODE_ENV == "production" ? 'production' : 'development', // '构建模式'
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    path: process.env.NODE_ENV === "production" ? path.resolve(__dirname, './out') : path.resolve(__dirname, './www'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
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
  performance: {
    hints: false
  },
  devServer: {
    host: '127.0.0.1',
    port:8000,
    compress: true,
    contentBase: './www',
    historyApiFallback:{
      index: './index.html'
    }
  }
}