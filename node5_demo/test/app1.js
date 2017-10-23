var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	/*res.writeHead(200,{'Content-type':'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/about.html','utf8');
	myReadStream.pipe(res);*/
	
	if(req.url !== '/favicon.ico'){
		if(req.url == '/home' || req.url == '/'){
			res.writeHead(200,{'Content-type':'text/html'});	
			var myReadStream = fs.createReadStream(__dirname + '/home.html','utf8');
			myReadStream.pipe(res);
		}else if(req.url == '/about.html'){
			res.writeHead(200,{'Content-type':'text/html'});	
			var myReadStream = fs.createReadStream(__dirname + '/about.html','utf8');
			myReadStream.pipe(res);
		}else{
			res.writeHead(200,{'Content-type':'text/plain'});	
			res.end('404: not found');
		}
	}

}).listen(3000,'localhost');
console.log('server is running...');