// 1. 引入events模块
var event = require("events");	//events是系统提供的模块,不用写路径

// js事件
// element.on("click",function(){
// 	// 具体执行的代码
// });

// 2. 实例化事件对象
var myEmitter = new event.EventEmitter();
// 注册事件(注册监听器)
myEmitter.on("sbqEvent",function(){
	console.log("sbqEvent事件被触发");
});
// 激活事件(触发事件)
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
myEmitter.emit("sbqEvent");


// 监听器函数可以使用setImmediate()或process.nextTick()方法切换到异步操作模式
myEmitter.on('sbqevent',(a,b) => {
	setImmediate(() => {
		console.log('这个是异步发生的');
	});
});
myEmitter.emit('event','a','b');


// 当使用eventEmitter.on()方法注册监听器时,监听器会在每次触发命名事件时被调用。
// 使用eventEmitter.once()方法时可以注册一个对于特定事件最多被调用一次的监听器.当事件被触发时,监听器会被注销,然后再调用


// 1. 引入events模块
// var events = require('events');
// 2. 创建eventEmitter对象
// var eventEmitter = new events.Eventmitter();


// demo1
/*var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
	console.log('some_event事件触发');
});
setTimeout(function(){
	event.emit('some_event');
},1000);*/


// demo2
/*var events = require('events');
var eventEmitter = new events.EventEmitter();
// 监听器1
var listener1 = function listener1(){
	console.log('监听器 Listener1 执行');
}
// 监听器2
var listener2 = function listener2(){
	console.log('监听器 listener2 执行');
}
// 绑定connection事件,处理函数为listener1
eventEmitter.addListener('connection',listener1);
// 绑定connection事件,处理函数为listener2
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听连接事件');
// 处理connection 事件
eventEmitter.emit('connection');
// 移除绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听');
// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');*/


// error事件
/*var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
*/


