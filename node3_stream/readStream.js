var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);		// 返回一个新建的ReadStream对象

myReadStream.on("data",function(chunk){	// data是固定的
	console.log("===================接收chunk===================");
	console.log(chunk);
});		