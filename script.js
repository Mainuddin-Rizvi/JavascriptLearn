// Parsing JSON string into an object
var jsonString = '{"name":"Alice","age":30,"city":"New York"}';
var parsedObject = JSON.parse(jsonString);

console.log(parsedObject);        // Output: { name: 'Alice', age: 30, city: 'New York' }
console.log(parsedObject.name);   // Output: Alice
console.log(parsedObject.age);    // Output: 30
console.log(parsedObject.city);   // Output: New York

// Stringifying an object into a JSON string
var obj = {
  name: "Bob",
  age: 25,
  city: "London"
};

var jsonString = JSON.stringify(obj);

console.log(jsonString);  // Output: {"name":"Bob","age":25,"city":"London"}
