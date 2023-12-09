"use strict";
function Greeting(person) {
    console.log(`Hello, ${person.first} ${person.last}`);
    person.SayHello();
}
const azt = {
    first: "azt",
    last: "test",
    age: 30,
    SayHello() {
        console.log("Hi there");
    },
};
const steven = {
    first: "john",
    last: "test",
    age: 40,
    SayHello() {
        console.log(`Hello, buddy `);
    },
};
Greeting(azt);
Greeting(steven);
