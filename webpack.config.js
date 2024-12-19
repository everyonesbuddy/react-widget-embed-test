const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "widget.js",
    library: "ReactWidget",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  mode: "production",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/index.html",
          to: "index.html",
        },
      ],
    }),
    new CaseSensitivePathsPlugin(),
  ],
};
