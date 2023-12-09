"use strict";
function uniqueDataTypeFunc(item, defaultValue) {
    return [item, defaultValue];
}
const str = uniqueDataTypeFunc("hello", "azt");
console.log(str);
const dog1 = uniqueDataTypeFunc({ name: "buddy", breed: "Labrado" }, { name: "duddy", breed: "unknown" });
console.log(dog1);
