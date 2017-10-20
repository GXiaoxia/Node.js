var fs = require("fs");

// 同步 读取 & 写入
// var readMe = fs.readFileSync("readMe.txt");			// 输出数据流文件
// var readMe = fs.readFileSync("readMe.txt","utf8");		// 输出内容
// console.log(readMe);

// 会创建一个名为writeMe.txt的文件,内容和readMe一样(会把原来内容清掉,要保留可以拼接)
// fs.writeFileSync("writeMe.txt",readMe);		
// fs.writeFileSync("writeMe.txt","hello world");		// 返回值是undefined


// 异步 读取 & 写入
/*fs.readFile("writeMe.txt","utf8",function(err,data){
	if(err) throw err;
	// console.log(data);
});
// console.log(111);
fs.writeFile("writeMe.txt","12345",function(err,data){
	if(err) throw err;
	// console.log(data);		// 返回值是undefined
});
*/


// 练习: 异步读取文件readMe.txt,并将读取的文件内容写入到writeMe.txt中
/*fs.readFile("readMe.txt","utf8",function(){
	if(err) throw err;
	fs.writeFile("writeMe.txt",data);
});*/

// 删除文件
/*fs.unlink("writeMe.txt",function(err){
	if(err) throw err;
});*/

// 创建文件夹
fs.mkdir("stuff",function(){

});

// 删除文件夹
fs.rmdir("stuff",function(){
	
});

