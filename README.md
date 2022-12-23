# Password-Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit the Deployed Site](https://famelga.github.io/Password-Generator/)

In order to generate a random password, employees are able to use this website.

I first used psuedo-code to plan which functions would be necessary. The first step was to create a prompt and confirms in a function that required employees to select their password  criteria. Since employees are required to create passwords with specific lengths and at least one character criteria, I included the prompt and confirms with a "while." The while will loop each question the previous one if the criteria requirements aren't satified.



## Portfolio Example

Below, I added the and if requirements.


```function gatherCrit() {
  // Create boolean variable
  var validPasswordLength = false;
  //Repeating loop till criteria is met
  while (validPasswordLength == false) {
    // Passing a string through the function prompt which returns a value that is saved to userlength
    var userlength = prompt("Enter password length. Must be between 8-128 characters in length.");
    // var userlength = prompt("Enter password length. Must be between 8-128 characters in length.");
    if (userlength >= minLength && userlength <= maxLenth) {
      validPasswordLength = true;
    } else {
      alert("Password must be between " + minLength + " and " +  maxLenth + " characters");
    }
  }
```

Here, the confirms are also in a while. In comparison to the prompt, the confirms need a logical or so that at least one criteria is selected.

```
  while (chCritMet == false) {
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var lowLet = confirm("Include lowercase letters");
    // if the user wants lowercase letters, add "lower" to criteria array
    if (lowLet == true) {
      userCrit.concat(lChArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var upLet = confirm("Include uppercase letters");
    // / if the user wants uppercase letters,
    if (upLet == true) {
      // add "upper" to criteria array
      userCrit.concat(upChArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var num = confirm("Include numbers");
    // / if the user wants numbers,
    if (num == true) {
      // add "number" to criteria array
      userCrit.concat(intArr);
    }
    // Passing string through the function confirm which returns a boolean value that is stored in its assigned var
    var spCh = confirm("Include special character");
    // if the user wants special characters,
    if (spCh == true) {
      // add "special" to criteria array
      userCrit.concat(spChArr);
    }

    if (lowLet == true || upLet == true || num == true || spCh == true) {
      chCritMet = true;
    } else {
      alert("At least one character criteria must be selected.");
    }
  }
```


## Usage 

Visit website.


![Portfolio Homepage](assets/img/PW%20Gen.jpg)



## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga




## License

MIT License

Copyright (c) 2022 Fayven Amelga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.