/*
สร้างฟังก์ชันชื่อ sumEvenNumbers
รับกล่องตัวเลข (Array ของ number)
ให้เดินดูทุกตัว ถ้าเป็นเลขคู่เอามาบวกกัน
แล้วคืนค่าผลรวมออกมา
*/
function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  let sum = 0;
  
  for (const number of numbers) {
  if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
