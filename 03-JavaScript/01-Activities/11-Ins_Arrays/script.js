// So far, we have been storing one piece of data in variables
var name = "Andre";
var pets = 3; 
var isStudent = true;

// To store groups of data in a single variable, we use arrays
var names = ["Andre", "Karl", "Rashida", "Olivia"];

// The entire array can be accessed by using the array's name 
console.log(names);

// To log a single element, we use the name of the array with the index in brackets
console.log(names[1]); 

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]); 

// We can also use index to replace data in an array
// Returns "Olivia"
console.log(names[3]);

//Replaces "Olivia" with "Carter"
names[3] = "Carter"; 

// Logs "Carter"
console.log(names[3]);

// We use the array's length property to determine how many elements are in the array
console.log(names.length);
