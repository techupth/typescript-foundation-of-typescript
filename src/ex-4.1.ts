type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// age อาจไม่มีค่า เพราะกำหนดให้เป็น Optional Property (age?)
// ทำให้ TypeScript ไม่แน่ใจว่า age จะเป็นตัวเลขหรือไม่มีค่า (undefined)
// จึงไม่อนุญาตให้นำ age ไปเช็คกับ 18 โดยตรง