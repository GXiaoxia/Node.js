var counter = function(arr){
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(['1','2','3']));

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}

var pi = 3.14;

// 只有使用module.exports后,其他文件才可以引用
// module.exports是一个对象
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// Module Patterns  模块模式
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}


// 在Node.js中,文件和模块是一一对应的,每个文件被视为一个独立的模块
// 模块中只有定义和exports,不在模块中执行功能
// exports是模块公开的接口,require用于从外部获取一个模块的接口
