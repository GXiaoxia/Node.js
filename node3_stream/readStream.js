var http = require('http');
var fs = require("fs");
/*// 创建可读流
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);		// 返回一个新建的ReadStream对象
var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt");

// 管道 (拿到的数据.pipe = 放入的文件)
myReadStream.pipe(myWriteStream);	// 将myReadStream获取到的内容放入myWriteStream指定的文件中
*/
// 处理流事件
/*myReadStream.on("data",function(chunk){	// data是固定的
	// console.log("===================接收chunk===================");
	// console.log(chunk);
	myWriteStream.write(chunk);
});	*/	


// 创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
	myReadStream.pipe(res);		// 将myReadStream的内容返回浏览器
});
server.listen(3000,'127.0.0.1');
console.log("server is running...");
