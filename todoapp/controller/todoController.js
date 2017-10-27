var bodyParser = require('body-parser');		// 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{item:'Dog'},{item:'East'},{item:'West'}];

module.exports = function(app){
	// console.log(app);
	// app.get方法,用于指定不同的访问路径所对应的回调函数,即路由
	app.get('/todo',(req,res) => {		
		res.render('todos',{todos:data});		// 标明要识别的引擎
	});

	app.post('/todo',urlencodedParser,(req,res) => {
		// console.log(req.body);		// { item :'q'}
		data.push(req.body);
		res.json(data);
	});

	app.delete('/todo/:name',(req,res) => {
		// console.log(req.params.name);

		// ES6 == es2015 array method(for..of  filter  map)
		// filter:满足条件的留下,不满足的去掉
		/*data = data.filter(function(todo){
			var value = todo.item !== req.params.name;
			// console.log(value);	// bool
			return value;
		});*/
		
		for(var i=0;i<data.length;i++){
			if(data[i].item == req.params.name){
				data.splice(i,1);
			}
		}
		res.json(data);
	});
}