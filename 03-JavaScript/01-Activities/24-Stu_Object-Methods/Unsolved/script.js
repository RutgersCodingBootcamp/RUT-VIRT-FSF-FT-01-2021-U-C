var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
   console.log("Congrats! " + chosenPet.Lulu + ", a great dog, is available for adoption!");
   apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage;
}

if (dogs.includes(chosenPet)) {
  dogMessage();
} else if (cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter[0] + ". or our featured cat, " + cat.shelter[1]);
}
  
