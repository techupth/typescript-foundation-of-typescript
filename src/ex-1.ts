function calculate(a: number, b: number, operator: string): number | string {
  switch (operator) {
    case "add":
        return a + b;
    case "subtract":
        return a - b;
    case "multiply":
        return a * b;
    case "divide":
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    default:
        return "Invalid operator";
}
}

console.log(calculate(10, 5, "add")); 
console.log(calculate(10, 5, "multiply")); 
console.log(calculate(10, 5, "divide")); 
console.log(calculate(10, 5, "mod")); 
