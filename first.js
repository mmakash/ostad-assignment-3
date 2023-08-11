// 1) javascript For in loop
function printObjectProperties(obj) {
  for (let property in obj) {
    console.log(`${property} : ${obj[property]}`);
  }
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};
printObjectProperties(person);
