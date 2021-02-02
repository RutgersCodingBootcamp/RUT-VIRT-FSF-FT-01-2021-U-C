var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// The unshift method adds an element to the beginning of the array 
constellations.unshift("Canis Major");
console.log(constellations);

// The pop method removes the last element in the array
planets.pop();
// The original array is changed
console.log(planets);

//The concat method joins constellations and planets array and returns new array
var galaxy = constellations.concat(planets);
//The galaxy and planet arrays are unchanged
console.log(planets);
console.log(constellations);
console.log(galaxy);

// The toUpperCase method makes all the letters in the string "polaris" capital letters
var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);
// The original string is unchanged
console.log(star);
