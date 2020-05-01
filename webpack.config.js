const path = require('path');

module.exports = {
  entry: './khen.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'khen.js'
  }
};