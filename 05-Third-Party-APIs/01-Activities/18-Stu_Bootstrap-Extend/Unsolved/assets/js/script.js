var formEl = $('#guestbook-form');
var nameInputEl = $('#name-input');
var commentInputEl = $('#comment-input');
var guestBookDisplayEl = $('#guest-book-display');

var printGuestData = function (name, comment) {
  var cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  var cardEl = $('<div>');
  // add another class for `custom-card`
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  // add another class for `custom-card-header`
  var cardName = $('<h5>').addClass('card-header').text(name);
  cardName.appendTo(cardEl);

  var cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  var cardComment = $('<p>').addClass('card-text').text(comment);
  cardComment.appendTo(cardBodyEl);

  guestBookDisplayEl.append(cardColumnEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var commentInput = commentInputEl.val();

  if (!nameInput || !commentInput) {
    console.log('You need to fill out the form!');
    return;
  }

  // print card with guest data
  printGuestData(nameInput, commentInput);

  // reset form
  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
