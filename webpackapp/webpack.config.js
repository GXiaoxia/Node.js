// 运行webpack的入口文件

// const path = require('path');
module.exports = {
	// 配置入口文件
	entry: './src/js/app.js',
	// 配置出口文件
	output: {
		path: __dirname+'/dist',
		// path: path.resolve(__dirname),	// 开始定义了path
		filename: 'bundle.js'
	},
	devServer:{
		contentBase: "./node6",
		inline:true
	},
	// 配置模块信息(第三方库,插件,加载器等)
	module: { 
		loaders:[
			{
				test: /\.css$/,	   //所有css文件
				loader: 'style-loader!css-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015']
				}
			}
		]
	}
}


// 在终端运行webpack即可