type MyType = string | number;
function showType(value: MyType) {
  if (typeof value === "string") {
    console.log(`typeof ${typeof value} :${value.toUpperCase()}`);
  } else {
    console.log(`typeof ${typeof value} :${value.toFixed(2)}`);
  }
}
showType("azt");
showType(60);
