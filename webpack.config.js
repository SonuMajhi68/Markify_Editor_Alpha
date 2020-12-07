const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: "./src/scripts/index.js",

  devtool: "inline-source-map",

  target: "electron-renderer",

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"',
      global: {}, // bizarre lodash(?) webpack workaround
      "global.GENTLY": false, // superagent client fix
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
