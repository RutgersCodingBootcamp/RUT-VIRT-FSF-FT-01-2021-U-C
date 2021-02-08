// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/select DOM elements
var rootEl = $('#root');

// Starting from the root element, `rootEl`, select all the boxes and turn them white.
rootEl.find('li').css('background-color', 'white');
// Alternatively
// rootEl.children().children().css("background-color", "white");

// Starting from rootEl, what is the statement that will use "O" to block the "X" from winning
// Create each row's selection to easily choose the appropriate square
// `eq(0)` or `first()` is the `<h1>`
var rowOne = rootEl.children().eq(1).children();
var rowTwo = rootEl.children().eq(2).children();
var rowThree = rootEl.children().last().children();

rowThree.first().text('O');
// Alternatively: rowThree.eq(0).text("O");

// Starting from the bottom row, middle square or `.item-c2`, what is the statement that will win the game using "O"
$('.item-b3').closest('main').children().children().eq(0).text('O');
// Alternatively go up each parent, one level at a time
// $(".item-b3").parent().parent().children().children().first().text("O");
