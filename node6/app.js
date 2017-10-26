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
/*
Express路由:
	由一个URL和一个特定的HTTP方法(get,post等)组成的,涉及到应用如何响应客户端对某个网站节点的访问.
	每一个路由都可以有一个或多个处理器函数,当匹配到路由时,这个/些函数将被执行.
路由的定义结构:    app.METHOD(path,[callback..],callback)
	app是express对象的一个实例,METHOD是一个HTTP请求方法,path是服务器上的路径,callback是当路由匹配时要执行的函数
	express定义了和HTTP请求对应的路由方法:
	get,post,put,head,delete,options,trace,copy等

*/
