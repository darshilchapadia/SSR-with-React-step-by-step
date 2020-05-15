const path = require('path');

module.exports = {
  entry: './src/index.js',
  output : {
    filename: 'c-bundle.js',
    path: path.resolve(__dirname, '../build')  
  },
  module: {
    rules: [
      {
        test:/\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } } ]
          ]
        }
      }
    ]
  }
}
