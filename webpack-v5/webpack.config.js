const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
	mode = "production";
}

module.exports = {
	mode,

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},

	plugins: [new MiniCssExtractPlugin(), new CssMinimizerPlugin()],

	devtool: "source-map",
	devServer: {
		static: {
			directory: "./dist",
		},
		hot: true,
	},
};
