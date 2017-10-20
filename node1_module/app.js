var stuff = require("./module");	// 不需要加.js, ./表示当前目录
console.log(stuff.counter(['1','2','3']));
console.log(stuff.adder(1,2));
console.log(stuff.pi);

