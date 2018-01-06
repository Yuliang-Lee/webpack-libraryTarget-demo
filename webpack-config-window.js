const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'window.js',
    library: "myDemo",
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['js'],
  }
  
};
