function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}
const str = uniqueDataTypeFunc<string>("hello", "azt");
console.log(str);

interface Dog {
  name: string;
  breed: string;
}
const dog1 = uniqueDataTypeFunc<Dog>(
  { name: "buddy", breed: "Labrado" },
  { name: "duddy", breed: "unknown" }
);
console.log(dog1);
