function sumEvenNumbers(numbers: number[]): number {
  const sum = numbers
  .filter(num => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
