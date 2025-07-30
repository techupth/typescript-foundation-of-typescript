type User = {
  id: string;
  name: string;
  age?: number;
};


function isAdult(user: User): boolean {
  
  return user.age !== undefined && user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result);
