module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: [ "react", "es2015" ],
					plugins: [ "react-html-attrs", "transform-class-properties", "transform-decorators-legacy" ]
				}
			}
		]
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
