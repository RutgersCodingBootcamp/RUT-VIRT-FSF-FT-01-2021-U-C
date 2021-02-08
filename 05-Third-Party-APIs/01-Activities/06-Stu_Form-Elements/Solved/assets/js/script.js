var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var shoppingItem = $('input[name="shopping-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // print to the page
  shoppingListEl.append('<li>' + shoppingItem + '</li>');

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// Create a submit event listener on the form element
shoppingFormEl.on('submit', handleFormSubmit);
