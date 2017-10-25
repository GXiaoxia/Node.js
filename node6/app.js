// express是一个基于Node.js平台的极简,灵活的web应用开发框架

var express = require('express');  // 方法
var app = express();		//对象

// 路由结构: app.method(path,[callback])		app为express对象的一个实例
// method: get,post,put,head,delete,options,trace,copy等
app.get('/',(req,res) => {
	// console.log(req);		//输出到终端
	res.send('this is home page');	// 输出到页面
});

app.get('/contact',(req,res) => {
	res.send('this is contact page');
})
// 有几个页面,就写几个app.get

app.get('/blogs/:sbqid',(req,res) => {
	// console.log(req);
	res.send('具体的路由参数为: ' + req.params.sbqid);
});

app.listen(3000);		// 第二个参数默认localhost



/*
	1.cd 文件夹
	2.cnpm —version
	3.sudo cnpm install nodemon -g	// nodemon自动重启项目工程
	4.npm init --yes			// 生成package.json
	5.cnpm install express --save
	6.nodemon app	            // 运行    html文件需要写rs     
*/
