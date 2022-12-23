// Assignment code here

// Add var for each series of prompts
var minLength = 8;
var maxLenth = 128;

// Add arrays of criteria
var lChArr = ["a", "b", "c", "d", "e", "f'", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upChArr = ["a", "b", "c", "d", "e", "f'", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var intArr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spChArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "+"];

// Add expressions and logical and operations
var expression1 = minLength <= maxLenth;
var expression2 = maxLenth >= minLength;

console.log(expression1 && expression2);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {


  }

  // 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Gather password criteria
function gatherCrit() {
  // Create boolean variable
  var validPasswordLength = false;
  //Repeating loop till criteria is met
  while (validPasswordLength == false) {
    // Passing a string through the function prompt which returns a value that we save to length 
    var userlength = prompt("Enter password length. Must be between 8-128 characters in length."); 
    if (userlength >= minLength && userlength <= maxLenth) {
      validPasswordLength = true;
    } else {
      alert("Password must be between " + minLength +  " and " +  maxLenth + " characters");
    }
  }

  var chCritMet = false;
  // If one of the character var is true, the chCritMet criteria is true
  while(chCritMet == false) {
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var lowLet = confirm("Include lowercase letters");
 
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
  var upLet = confirm("Include uppercase letters");

    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
  var num = confirm("Include numbers");

    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
  var spCh = confirm("Include special character");


  if(lowLet == true || upLet == true || num == true || spCh == true) {
    chCritMet = true;
  } else {
    alert("At least one character criteria must be selected.")
  }
}
}


// Idenitfy desired criteria 
// and makes sure at least one criteria is selected; while loop, change condition to exit
// Pull desired criteria from array(s) 
function arrExtr() {
if(lowLet == true) {

}
if(upLet == true) {
  
}
if(num == true) {
  
}
if(spCh == true) {
  
}

}

//if var

var aIndex = Math.floor(Math.random() * 26);
lChArr[aIndex];

var uIndex = Math.floor(Math.random() * 26);
upChArr[uIndex].toUpperCase;

var numIndex = Math.floor(Math.random() * 10);
intArr[numIndex];

var spIndex = Math.floor(Math.random() * 14);
spChArr[spIndex];


// Save to string/array var
// Populate password into placeholder
// doc queryselect 
