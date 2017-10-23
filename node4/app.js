var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	/*
	Content-type:
		text/plain : 返回的是纯文本
		text/html  : 返回的是html 
		application/json : 返回的是json
	*/   
	res.writeHead(200,{'Content-type':'application/json'});	
	// var myReadStream = fs.createReadStream(__dirname + "/index.html","utf8");
	// 返回接口方法1:
	var myReadStream = fs.createReadStream(__dirname + "/users.json","utf8");
	myReadStream.pipe(res);

	// 返回接口方法2:
	/*var users = {
		name:'guo',
		age:20,
		gender:'female'
	};
	res.end(JSON.stringify(users));*/
});

server.listen(3000,'localhost');
console.log('server is running...');