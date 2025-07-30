type User = {
  id: string;
  name: string;
  age?: number; 
};

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    return false; 
  }
  return user.age >= 18; 
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// TypeScript จะเกิดข้อผิดพลาดที่บอกว่า "Object is possibly 'undefined'"
// เนื่องจาก `user.age` อาจจะเป็น undefined (เมื่อไม่ได้ระบุ age) ทำให้ไม่สามารถเปรียบเทียบ `undefined >= 18` ได้
