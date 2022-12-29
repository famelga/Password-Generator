// Assignment code here
// Add var for prompts
var minLength = 8;
var maxLenth = 128;
// List of user password criteria and length
var userlength;
// Newly generated array
// Add arrays of criteria
var lChArr = ["a", "b", "c", "d", "e", "f'", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upChArr = [ "a", "b", "c", "d", "e", "f'", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var intArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spChArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "+"];

// Add expressions and logical and operations
var expression1 = minLength <= maxLenth;
var expression2 = maxLenth >= minLength;

// Gather password criteria
function gatherCrit() {
  // Create boolean variable
  // Changed variables from global to local
  var validPasswordLength = false;
  var chCritMet = false;
  var userCrit = [];
  //Repeating loop till criteria is met
  while (validPasswordLength == false) {
    // Passing a string through the function prompt which returns a value that is saved to userlength
    userlength = prompt("Enter password length. Must be between 8-128 characters in length.");
    if (userlength >= minLength && userlength <= maxLenth) {
      validPasswordLength = true;
    } else {
      alert("Password must be between " + minLength + " and " +  maxLenth + " characters");
    }
  }

  // If one of the character var is true, the chCritMet criteria is true
  while (chCritMet == false) {
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var lowLet = confirm("Include lowercase letters");
    // if the user wants lowercase letters, add "lower" to criteria array
    if (lowLet == true) {
      userCrit = userCrit.concat(lChArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var upLet = confirm("Include uppercase letters");
    // / if the user wants uppercase letters,
    if (upLet == true) {
      // add "upper" to criteria array
      userCrit = userCrit.concat(upChArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var num = confirm("Include numbers");
    // / if the user wants numbers,
    if (num == true) {
      // add "number" to criteria array
      userCrit = userCrit.concat(intArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var spCh = confirm("Include special character");
    // if the user wants special characters,
    if (spCh == true) {
      // add "special" to criteria array
      userCrit = userCrit.concat(spChArr);
    }

    if (lowLet == true || upLet == true || num == true || spCh == true) {
      chCritMet = true;
    } else {
      alert("At least one character criteria must be selected.");
    }
  }
  // Add return 
  return {userlength, userCrit}
}

function generatePassword() {
  // Changed var to local
  var newArray = [];
  var options = gatherCrit();
  console.log(options);
  
  for (var i = 0; i < options.userlength; i++) {
    // Use push reference
    newArray.push(options.userCrit[Math.floor(Math.random()*options.userCrit.length)]);

}
// Add return and removed commas with ''
return newArray.join('')
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 