"use strict";
class Human {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    getName() {
        return `${this.first} ${this.last} ${this.age}`;
    }
}
class person extends Human {
    constructor(first, last, age) {
        super(first, last, age);
    }
}
const user = new person("azt", "tt", 30);
console.log(user.getName());
