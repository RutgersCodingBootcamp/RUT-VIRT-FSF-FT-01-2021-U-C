var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 11;

// If statement
// Evaluates to true so "Hungry" is logged

if (hungerLevel >= 50) {
  console.log("Hungry!");
}

// Evaluates to false so nothing is logged
if (hungerLevel < 50) {
  console.log("Hungry!");
}

// Else statement 
// Evaluates to true so "Lunchtime" is logged
if (isLunchTime === true) {
  console.log("Lunchtime");
} else {
  console.log("Not Lunchtime");
}

// isLunchTime is another way of writing "isLunchTime === true"
if (isLunchTime) {
  console.log("Lunchtime!!");
} else {
  console.log("Not Lunchtime!!");
}

// Evaluates to false so "It's Lunchtime Already" is logged
if (!isLunchTime) {
  console.log("Not Lunchtime Already!!");
} else {
  console.log("It's Lunchtime Already !!");
}

// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""

if (lunchBill < 10) {
  console.log("Cost Rating: $");
} else if (lunchBill >= 10 && lunchBill < 15) {
  console.log("Cost Rating: $$");
} else {
  console.log("Cost Rating: $$$");
}
