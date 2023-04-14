//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); //ok
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

//default parameter

function buildName2(firstName: string, lastName = "Khan"): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let resultd1 = buildName2("Bob"); //works correctly because last parameter is optional
//let result2 = buildName2("Bob", "Adams", "Sr.");  //error, too many parameters
let resultd3 = buildName2("Bob", "Adams"); //correct

function buildName3(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};
