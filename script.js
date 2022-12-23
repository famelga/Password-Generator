// Assignment code here
// Add var for prompts
var minLength = 8;
var maxLenth = 128;
// List of user password criteria and length
var userCrit = [];
var userlength;
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
  var validPasswordLength = false;
  //Repeating loop till criteria is met
  while (validPasswordLength == false) {
    // Passing a string through the function prompt which returns a value that we save to length
    userlength = prompt(
      "Enter password length. Must be between 8-128 characters in length."
    );
    if (userlength >= minLength && userlength <= maxLenth) {
      validPasswordLength = true;
    } else {
      alert(
        "Password must be between " +
          minLength +
          " and " +
          maxLenth +
          " characters"
      );
    }
  }

  var chCritMet = false;
  // If one of the character var is true, the chCritMet criteria is true
  while (chCritMet == false) {
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var lowLet = confirm("Include lowercase letters");
    // if the user wants lowercase letters,
    if (lowLet == true) {
      // add "lower" to criteria array
      userCrit.push("lower");
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var upLet = confirm("Include uppercase letters");
    // / if the user wants uppercase letters,
    if (upLet == true) {
      // add "upper" to criteria array
      userCrit.push("upper");
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var num = confirm("Include numbers");
    // / if the user wants numbers,
    if (num == true) {
      // add "number" to criteria array
      userCrit.push("number");
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var spCh = confirm("Include special character");
    // if the user wants special characters,
    if (spCh == true) {
      // add "special" to criteria array
      userCrit.push("special");
    }

    if (lowLet == true || upLet == true || num == true || spCh == true) {
      chCritMet = true;
    } else {
      alert("At least one character criteria must be selected.");
    }
  }
}

// Idenitfy desired criteria
// and makes sure at least one criteria is selected; while loop, change condition to exit
// Pull desired criteria from array(s)
// if user criteria is used, pull from critArray
// Join into new array
// Randomly select characters from new array to create password based on length criteria

function generatePassword() {
  // Newly generate array
  var newArray = [];
  for (var i = 0; i < userlength; i++) {
    userCrit = Math.floor(Math.random() * userCrit.length);
    switch (userCrit) {
      case "lower":
        var aIndex = Math.floor(Math.random() * 26);
        newArray.push(lChArr[aIndex]);
        break;
      case "upper":
        var uIndex = Math.floor(Math.random() * 26);
        newArray.push(upChArr[uIndex].toUpperCase);
        break;
      case "number":
        var numIndex = Math.floor(Math.random() * 10);
        newArray.push(intArr[numIndex]);
        break;
      case "special":
        var spIndex = Math.floor(Math.random() * 14);
        newArray.push(spChArr[spIndex]);
        break;
      default:
        console.log("error in switch statement");
    }
  }
  console.log("newArray.toString " + newArray.toString);

  return newArray;
}

// Save to string/array var
// Make
// Populate password into placeholder
// doc queryselect
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  gatherCrit();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
