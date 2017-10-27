var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static(__dirname+'/assets'));

var todoController = require('./controller/todoController');

todoController(app);

app.listen(3000);


/*
	npm init --yes			生成package.json
	cnpm install express --save
	nodemon app	 			html文件需要写rs (restart)   运行
	cnpm install ejs --save

	cnpm install express ejs body-parser --save

	nav.ejs中只能有一个根标签
*/


