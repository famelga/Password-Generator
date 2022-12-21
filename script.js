// Assignment code here

// Add var for each series of prompts
var createPw = true;
var minLength = 8
var maxLenth = 128;
var lowerCase = true;
var upperCase = true;
var num = true;
var specCh = true;

// Add console.log
console.log(typeof createPw);
console.log(typeof minLength);
console.log(typeof maxLenth);
console.log(typeof lowerCase);
console.log(typeof upperCase);
console.log(typeof num);
console.log(typeof specCh);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
