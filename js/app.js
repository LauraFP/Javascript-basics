/*
  -------------------------------
  JAVASCRIPT BASICS
  -------------------------------
*/

// First DECLARE THE VARIABLES:

var userName = "Laura";
var userFamilyName = "Fernandez";
var userAge = 25;
var favColors = ["green", "white", "sand"];
var friends = [
  {
    name: "Veronica",
    age: 28,
    hasKids: false
  },
  {
    name: "Marta",
    age: 34,
    hasKids: true
  },
  {
    name: "Polina",
    age: 27,
    hasKids: false
  }
];

// Second step, WRITE THE FUNCTIONS:

//Function declaration:
function userDescription() {
  return ("The user " + userName + " " + userFamilyName + " is " + userAge + " years old.");
}

// Function expression:
var sing = function () {
  return ("When you're smiling, \n\
  when you're smiling, \n\
  the whole world smiles with you");
}

// Function with params:
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

// CALLING THE FUNCTIONS:

userDescription();
/*
  Returns:
  "The user Laura Fernandez is 25 years old."
*/

sing();
/*
  Returns:
  "When you're smiling,
  when you're smiling,
  the whole world smiles with you"
*/

isOdd(43);
/*
  Returns:
  true
*/

isOdd(104);
/*
  Returns:
  false
*/
