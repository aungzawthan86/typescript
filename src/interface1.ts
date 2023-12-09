interface MathOperation {
  (x: number, y: number): number;
}
const Add: MathOperation = (a, b) => a + b;
const Multiply: MathOperation = (a, b) => a * b;

console.log(`Add : ${Add(4, 5)}`);
console.log(`Multiply : ${Multiply(4, 5)}`);
