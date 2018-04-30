const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		'script': './demo/script.js'
	},
	output: {
		publicPath: '/demo/dist/',
		path: path.join(__dirname, './demo/dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'], },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.vue$/, loader: 'vue-loader', options: { loaders: { 'scss': ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader'] } } },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
		]
	},
	resolve: {
		alias: {
			'demo-component': path.resolve('./src'),
			'bootstrap': path.resolve('./node_modules/bootstrap/scss/bootstrap.scss')
		},
		extensions: ['*', '.js', '.vue', '.json', '.scss']
	},
	devServer: {
		contentBase: path.join(__dirname, "demo/")
	}
}