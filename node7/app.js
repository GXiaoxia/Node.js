var express  = require('express');
var app = express();

// 设置模板引擎
app.set('view engine','ejs');			//view engine是固定的
// 访问静态文件
app.use('/assets',express.static('./assets'));		// 路径,文件名

app.get('/',(req,res) => {
	// res.send(__dirname+'/index.html');		// 只能返回纯文本
	// res.sendFile(__dirname+'/index.html');		// 正常
	// res.sendFile(__dirname+'/views/index.ejs');		// 无法识别
	res.render('index');		// 标明要识别的引擎(index.ejs),返回的是浏览器能够识别的东西
});

app.get('/contact',(req,res) => {
	// res.sendFile(__dirname+'/views/contact.ejs');
	res.render('contact');
});

// 路由参数
app.get('/blogs/:sbqid',(req,res) => {
	var sbqdata = [
		{title:'博客1',author:'guo',body:'this is first blog'},
		{title:'博客2',author:'gu',body:'this is second blog'},
		{title:'博客3',author:'g',body:'this is third blog'}
	];
	res.render('blog',{id:req.params.sbqid,data:sbqdata});
});

app.listen(3000);


// express中必须设置一个模板引擎