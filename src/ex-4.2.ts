function processData(data: unknown): string {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
  return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// "Property 'toUpperCase' does not exist on type 'unknown'."
// เนื่องจาก TypeScript ไม่สามารถมั่นใจได้ว่า `data` คือ `string` หรือไม่,
// จึงไม่อนุญาตให้เรียก `toUpperCase()` บน `unknown` type โดยตรง