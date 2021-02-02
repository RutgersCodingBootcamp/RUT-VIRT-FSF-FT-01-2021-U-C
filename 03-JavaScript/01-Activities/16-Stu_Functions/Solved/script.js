// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

// Using function expression
var isEqualTakeTwo = function (x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
};

// Logs "They are not equal"
isEqualTakeTwo(10, true);
