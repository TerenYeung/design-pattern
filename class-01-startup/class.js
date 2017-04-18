//利用函数定义类

function Person(name,age){
	this.name = name;
	this.age = age;
	this.say = function(){
		console.log("I'm " + this.name);
	}
}

var Adam = new Person('Adam',18);
Adam.say()
