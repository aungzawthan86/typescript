interface Person {
  first: string;
  last: string;
  age: number;
  SayHello(): void;
}
function Greeting(person: Person) {
  console.log(`Hello, ${person.first} ${person.last}`);
  person.SayHello();
}

const azt: Person = {
  first: "azt",
  last: "test",
  age: 30,
  SayHello() {
    console.log("Hi there");
  },
};
const steven: Person = {
  first: "john",
  last: "test",
  age: 40,
  SayHello() {
    console.log(`Hello, buddy `);
  },
};
Greeting(azt);
Greeting(steven);
