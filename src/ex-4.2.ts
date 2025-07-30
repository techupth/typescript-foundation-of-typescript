function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return "Not a string";
  } else {
    return "Invalid data type";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//return data.toUpperCase();