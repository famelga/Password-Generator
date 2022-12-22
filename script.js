// Assignment code here

// Add var for each series of prompts
var createPw = true;
var minLength = 8
var maxLenth = 128;
// var lowerCase = true;
// var upperCase = true;
// var num = true;
// var specCh = true;

var lChChoices = ["a", "b", "c", "d", "e"]

// Add console.log typeof
console.log(typeof createPw);
console.log(typeof minLength);
console.log(typeof maxLenth);
// console.log(typeof lowerCase);
// console.log(typeof upperCase);
// console.log(typeof num);
// console.log(typeof specCh);

// Add expressions and logical and operations
console.log(minLength <= maxLenth)
console.log(maxLenth >= minLength)

var expression1 = (minLength <= maxLenth);
var expression2 = (maxLenth >= minLength);

console.log(expression1 && expression2);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword(e) {
  // Add prompt to eventListener
  generateBtn = prompt("Enter password length. Must be between 8-128 characters in length.");
  console.log("alert")

  if (expression1 && expression2) {
    return characterType
  }

  function characterType() {
    generateBtn = confirm("Include lowercase letters?")
  }
//   if (minLength < 8) {

//     console.log("Password must be at least 8 characters.");
//     return "Password must be at least 8 characters."
// }
//   if (maxLenth > 128) {
//     console.log("Password may not exceed 128 characters.");
// }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  if (minLength < 8) {
    console.log("Password must be at least 8 characters.");
}

if (maxLenth > 128) {
    console.log("Password may not exceed 128 characters.");
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
