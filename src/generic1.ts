function getRamdonKeyPair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}
const stringObj = { a: "apple", b: "banana", c: "cheery" };
const rst = getRamdonKeyPair<string>(stringObj);
console.log(rst);

const numObj = { one: 1, two: 2, three: 3 };
const numrst = getRamdonKeyPair(numObj);
console.log(numrst);
