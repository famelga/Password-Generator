// Assignment code here

// Add var for each series of prompts
var createPw = true;
var minLength = 8
var maxLenth = 128;
var lowerCase = true;
var upperCase = true;
var num = true;
var specCh = true;

// Add console.log typeof
console.log(typeof createPw);
console.log(typeof minLength);
console.log(typeof maxLenth);
console.log(typeof lowerCase);
console.log(typeof upperCase);
console.log(typeof num);
console.log(typeof specCh);

// Add expressions and logical and
console.log(minLength <= maxLenth)
console.log(maxLenth >= minLength)

var expression1 = (minLength <= maxLenth);
var expression2 = (maxLenth >= minLength);

console.log(expression1 && expression2);

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
