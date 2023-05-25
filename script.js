// Array declaration and initialization
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
var mixed = [1, "hello", true, [2, 4, 6]];

// Accessing array elements
console.log(numbers[0]);    // Output: 1
console.log(fruits[1]);     // Output: banana
console.log(mixed[3][2]);   // Output: 6

// Modifying array elements
numbers[2] = 10;
fruits[0] = "pear";
mixed[1] = "world";
console.log(numbers);       // Output: [1, 2, 10, 4, 5]
console.log(fruits);        // Output: ["pear", "banana", "orange"]
console.log(mixed);         // Output: [1, "world", true, [2, 4, 6]]

// Array length
console.log(numbers.length);    // Output: 5
console.log(fruits.length);     // Output: 3
console.log(mixed.length);      // Output: 4

// Adding elements to an array
numbers.push(6);
fruits.push("grape");
mixed.push(false);
console.log(numbers);       // Output: [1, 2, 10, 4, 5, 6]
console.log(fruits);        // Output: ["pear", "banana", "orange", "grape"]
console.log(mixed);         // Output: [1, "world", true, [2, 4, 6], false]

// Removing elements from an array
numbers.pop();
fruits.pop();
mixed.pop();
console.log(numbers);       // Output: [1, 2, 10, 4, 5]
console.log(fruits);        // Output: ["pear", "banana", "orange"]
console.log(mixed);         // Output: [1, "world", true, [2, 4, 6]]

// Iterating over array elements
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Array methods
var reversed = fruits.reverse();
console.log(reversed);      // Output: ["orange", "banana", "pear"]

var sorted = numbers.sort();
console.log(sorted);        // Output: [1, 10, 2, 4, 5]
