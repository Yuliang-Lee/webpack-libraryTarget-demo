const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'assign.js',
    library: "myDemo",
    libraryTarget: 'assign'
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
