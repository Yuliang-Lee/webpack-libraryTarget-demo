const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'global.js',
    library: "myDemo",
    libraryTarget: 'global'
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
