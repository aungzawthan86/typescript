"use strict";
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = filterArray(numberArr, (num) => num % 2 === 0);
const oddNum = filterArray(numberArr, (num) => num % 2 != 0);
//console.log(`Even ${evenNum}`);
//console.log(`Odd ${oddNum}`);
const stringArr = ["apple", "orange", "cherry", "plean"];
const shortstr = filterArray(stringArr, (str) => str.length < 6);
const fruit = [
    { name: "orange", color: "yellow" },
    { name: "banana", color: "yellow" },
    { name: "apple", color: "red" },
];
const redfruit = filterArray(fruit, (f) => f.color === "red");
//console.log(redfruit);
function reversePair(v1, v2) {
    return [v2, v1];
}
const reverseVal = reversePair("azt", 40);
console.log(reverseVal);
