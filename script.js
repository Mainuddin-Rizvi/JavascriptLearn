var value1 = "Hello";        // truthy value (non-empty string)
var value2 = 0;              // falsy value (number zero)
var value3 = null;           // falsy value (null)
var value4;                  // falsy value (undefined)
var value5 = "";             // falsy value (empty string)
var value6 = "false";        // truthy value (non-empty string)
var value7 = true;           // truthy value (boolean true)
var value8 = [];             // truthy value (empty array)
var value9 = {};             // truthy value (empty object)
var value10 = function() {}; // truthy value (empty function)

console.log(Boolean(value1)); // Output: true
console.log(Boolean(value2)); // Output: false
console.log(Boolean(value3)); // Output: false
console.log(Boolean(value4)); // Output: false
console.log(Boolean(value5)); // Output: false
console.log(Boolean(value6)); // Output: true
console.log(Boolean(value7)); // Output: true
console.log(Boolean(value8)); // Output: true
console.log(Boolean(value9)); // Output: true
console.log(Boolean(value10)); // Output: true
