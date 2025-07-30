const processData = (data: unknown): string =>
  typeof data === "string" ? data.toUpperCase() : "Not a string";


console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//data เป็น unknown เรียก .toUpperCase ไม่ได้