// Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

// 2. What is the day of the week today?
var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek);

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
var weekNum = today.format("w");
var takeOut;
// Check odd, then assign boolean
if(weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$("#4a").text(takeOut + ", because it's currently week " + weekNum);