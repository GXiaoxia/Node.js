var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url !== '/favicon.ico'){
		// console.log(req.url);
		if(req.url == '/' || req.url == '/home'){
			res.writeHead(200,{'Content-type':'text/plain'});	
			res.end('this is home page');
		}else if(req.url == '/about'){
			res.writeHead(200,{'Content-type':'text/plain'});	
			res.end('this is about page');
		}else if(req.url == '/contact'){
			res.writeHead(200,{'Content-type':'text/plain'});	
			res.end('this is contact page');
		}else{
			res.writeHead(200,{'Content-type':'text/plain'});	
			res.end('404: not found');
		}
	}
	
	// res.writeHead(200,{'Content-type':'application/json'});	
	// var myReadStream = fs.createReadStream(__dirname + "/index.html","utf8");
	// myReadStream.pipe(res);

});

server.listen(3000,'localhost');
console.log('server is running...');