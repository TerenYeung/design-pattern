class Person{
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.say = ()=>{
			console.log(`I\'m ${this.name}`);
		}
	}
}

let Adam = new Person('Adam', 18)
Adam.say();
