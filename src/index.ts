class Human {
  public first: string;
  private last: string;
  protected age: number;
  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  getName() {
    return `${this.first} ${this.last} ${this.age}`;
  }
}
class person extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}
const user = new person("azt", "tt", 30);
console.log(user.getName());
