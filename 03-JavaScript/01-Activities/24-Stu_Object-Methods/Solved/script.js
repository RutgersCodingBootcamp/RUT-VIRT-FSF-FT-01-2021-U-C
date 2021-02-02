var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

function dogMessage() {
  // ChosenPet is a variable that holds a value "Lulu"
  console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
  // The apptMessage method is a method on the shelter object
  shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!"); 
  // An object method needs a () to work! 
  shelter.apptMessage();
}

// To access the array you must use the object name and the key related to the array
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");  
  // To access a value stored in the array, you use the object name, name of key and the value's index
  console.log("Check out our featured dog, " + shelter.dogs[0] + ", or our featured cat, " + shelter.cats[1]);
}
