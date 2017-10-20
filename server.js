// 1. 引入模块,返回(http)对象
var http = require('http');

// 3. listen()执行后再执行
var server = http.createServer(function(req,res){
	console.log('客户端和服务器已经建立通信'+req.url);
	// writeHead(statusCode[,statusMessage][,headers])--服务器返回非字符串时,需要响应头
	res.writeHead(200,{"Content-type":"text/plain"});
	//  响应信息
	res.end("hey nodejs");
});

// 2. 监听 listen(端口号,ip地址) -- 在浏览器输入127.0.0.1:3000之后才会触发
server.listen(3000,'127.0.0.1');	
console.log("server is running...");

// 注: 在terminal中先ctrl+c两次退出,再运行

// 客户端向服务器请求两次,第一次返回内容,第二次返回图标