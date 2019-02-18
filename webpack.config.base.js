const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  externals: "node_modules",
};

const baseLoaders = {
  ts: {
    test: /\.tsx?$/,
    loader: "ts-loader",
  },
  url: {
    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
    loader: 'url-loader',
    options: {
      limit: 25000,
    },
  },
  file: {
    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash:8].[ext]',
    },
  },
  scss: [
    {
      loader: "css-loader",
      query: {
        modules: true,
        sourceMap: true,
        localIdentName: "[local]",
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

const basePlugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

const webpackConfig = {
  baseConfig,
  baseLoaders,
  basePlugins,
};

module.exports = webpackConfig;