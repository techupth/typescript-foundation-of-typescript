function processData(data: unknown): string {
  if(typeof data === "string"){
  return data.toUpperCase();
}
  return "Not a string";
}
console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// data เป็น unknown ทำให้ TypeScript ไม่รู้ว่าข้อมูลที่ส่งเข้ามาเป็นประเภทอะไร
// ไม่อนุญาตให้เรียกใช้ .toUpperCase() ทันที
// ต้องตรวจสอบก่อนว่า data เป็น string หรือเปล่า ก่อนนำไปใช้งาน