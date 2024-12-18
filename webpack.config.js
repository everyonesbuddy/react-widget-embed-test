const path = require("path");

module.exports = {
  mode: "production", // Set the mode to 'production' or 'development'
  entry: "./src/index.js", // Entry point for your widget
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-widget.js", // Output bundle
    library: "MyWidget", // Expose the widget as a library
    libraryTarget: "umd", // Universal Module Definition
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JavaScript and JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM", // Exclude React and ReactDOM from the bundle
  },
};
