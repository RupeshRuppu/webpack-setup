const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpeg|jpg|webp|gif)$/,
				type: "asset/resource",
			},
		],
	},
};
