// //strongly typed syntax
// let a: string = "Pakistan";
// a = "USA";
// let b: number = 9;
// let c: boolean = true;

// //type inference
// let e = true;
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;

//step 002

//use const where variable values do not change
const a = 5;
const b: number = 33;
const c = "best";

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
let z = 5;
if (true) {
  z = 3;
  z = 2;
  console.log(z);
  //use z
} else {
  let z = "string";
  //use z
}
console.log("let: " + z); // Error: z is not defined in this scope
