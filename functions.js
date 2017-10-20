// 在nodejs中经常使用函数表达式

/*// 正常函数
function sayHi(){
	console.log("hello");
}

// 函数表达式  右左法则
var sayHi = function(){
	console.log("hello world");
}

sayHi();	// hello world,函数表达式比正常函数执行的快*/



function sayHi1(){
	console.log("hello");
}

var sayHi2 = function(){
	console.log("hello world");
}
function callFunction(foo){
	foo();
}
// callFunction(sayHi1);	// hello
callFunction(sayHi2);		// hello world



