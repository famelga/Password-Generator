// Assignment code here

// Add var for each series of prompts
var critMet = true;
var minLength = 8;
var maxLenth = 128;
// var lowerCase = true;
// var upperCase = true;
// var num = true;
// var specCh = true;

// Add arrays of criteria
var lChArr = ["a", "b", "c", "d", "e", "f'", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
String(lChArr).toUpperCase;
var intArr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spChArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "+"];

// Add console.log typeof
console.log(typeof createPw);
console.log(typeof minLength);
console.log(typeof maxLenth);
// console.log(typeof lowerCase);
// console.log(typeof upperCase);
// console.log(typeof num);
// console.log(typeof specCh);

// Add expressions and logical and operations
console.log(minLength <= maxLenth);
console.log(maxLenth >= minLength);

var expression1 = minLength <= maxLenth;
var expression2 = maxLenth >= minLength;

console.log(expression1 && expression2);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var validPasswordLength = false;
  // Add var for prompts and confirms
  while (validPasswordLength == false) {
    var length = prompt("Enter password length. Must be between 8-128 characters in length.");
    if (length >= minLength && length <= maxLenth) {
      validPasswordLength = true;
    } else {
      alert("Password must be between " + minLength +  " and " +  maxLenth + " characters");
    }
  }

  var lowLet = confirm("Include lowercase letters");
  if(lowLet = true) {
    lChArr.includes()
  } else {

  }

  var upLet = confirm("Include uppercase letters");
  if(upLet = true) {
String(lChArr).includes()
  } else {

  }

  var num = confirm("Include numbers");
  if(num = true) {

  } else {

  }

  var spCh = confirm("Include special character");
  if(spCh = true) {
  spChArr.includes()
  } else {

  }

  // var critMet = confirm("Generate password");
  // do {
  //   generatePassword();
  // } while(i = length) {
  // if(lowLet = true) || (upLet = true) || (num = true) || (spCh = true);
    
  // } 

  // }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  do {
    
  ;
  } while(Array.length = length) {
  if(lowLet = true) || (upLet = true) || (num = true) || (spCh = true);
    
  } 

  }

  // 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Gather password criteria
// Idenitfy desired criteria 
// and makes sure at least one criteria is selected; while loop, change condition to exit
// Pull desired criteria from array(s) 
// Save to string/array var
// Populate password into placeholder
// doc queryselect 
