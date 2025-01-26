const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
	mode: "production",
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "build"),
		assetModuleFilename: "images/[hash][ext][query]",
	},
	plugins: [new CleanWebpackPlugin()],
});
