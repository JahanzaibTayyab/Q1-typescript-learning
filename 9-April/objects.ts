let teacher = {
  name: "Zeeshan",
  experience: "10",
};

console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Jahanzaib",
  age: 24,
};

console.log(student["name"]);
console.log(student.age);
