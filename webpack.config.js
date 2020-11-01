var path = require('path');
var SRC_DIR = path.join(__dirname, 'client', 'src');
var DIST_DIR = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: "development",
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  watch: true,
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }
    ]
  }
};