const path = require("path");

module.exports = {
  entry: "index.js", // Replace with the path to your entry JavaScript file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "assets"), // Replace 'dist' with the desired output directory
  },
};
