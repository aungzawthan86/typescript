function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = filterArray<number>(numberArr, (num) => num % 2 === 0);
const oddNum = filterArray<number>(numberArr, (num) => num % 2 != 0);

//console.log(`Even ${evenNum}`);
//console.log(`Odd ${oddNum}`);

const stringArr = ["apple", "orange", "cherry", "plean"];
const shortstr = filterArray<string>(stringArr, (str) => str.length < 6);
//console.log(shortstr);

interface Fruit {
  name: string;
  color: string;
}
const fruit: Fruit[] = [
  { name: "orange", color: "yellow" },
  { name: "banana", color: "yellow" },
  { name: "apple", color: "red" },
];
const redfruit = filterArray<Fruit>(fruit, (f) => f.color === "red");
//console.log(redfruit);

function reversePair<T, U>(v1: T, v2: U): [U, T] {
  return [v2, v1];
}
const reverseVal = reversePair("azt", 40);
console.log(reverseVal);
