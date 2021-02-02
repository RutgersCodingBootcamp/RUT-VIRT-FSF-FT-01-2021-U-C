// Object customerDrink with three properties
var customerDrink = {
  name: "coffee",
  sugars: 3,
  isReady: true
};

// This logs the entire object
console.log(customerDrink);

// Note that in dot notation, the name of the object is followed by the key
if (customerDrink.isReady) {
  console.log("Ready for pick-up: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");

// Note that in bracket notation, the key is inside brackets and surrounded by quotes
} else {
  console.log("Still in order queue: " + customerDrink["name"] + " with " + customerDrink["sugars"] + " sugars.");
}
