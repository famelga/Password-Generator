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

Initially, I did not have any divs in my html code since I believed divs to be irrelevant due to lack of semantics and accessability.


```<section id="Work" class="sections">
                <h2>Work</h2>
                    <p class="c1">Landing Page</p>
                    <a href="https://famelga.github.io/Landing-Page/" target="_blank"><img src="./LandingPage.png"
                            alt="Yellow website homepage with image of a nebula" class="pic1"></a>
                    <p class="c2">Code Refactor</p>
                    <a href="https://famelga.github.io/code-refactor-site/" target="_blank"><img src="./Horiseon.png"
                            alt="Horiseon blue and white homepage" class="pic2"></a>
                    <p class="c2">CSS Cheatsheet</p>
                    <a href="https://famelga.github.io/Mini-project-2/" target="_blank"><img src="./Cheatsheet.png"
                            alt="Gray website of css cheatsheet snippets" class="pic2"></a>
        </section>
```

Adding the below div tags with classes created sections for Flexboxes to be abpplied to in css. (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

```
html
<section id="Work" class="sections">
            <div class="Projh2">
                <h2>Work</h2>
            </div>
            <div class="work">
                <div class="work-content">
                    <p class="c1">Landing Page</p>
                    <a href="https://famelga.github.io/Landing-Page/" target="_blank"><img src="./LandingPage.png"
                            alt="Yellow website homepage with image of a nebula" class="pic1"></a>
                </div>
                <div class="work-content">
                    <p class="c2">Code Refactor</p>
                    <a href="https://famelga.github.io/code-refactor-site/" target="_blank"><img src="./Horiseon.png"
                            alt="Horiseon blue and white homepage" class="pic2"></a>
                    <p class="c2">CSS Cheatsheet</p>
                    <a href="https://famelga.github.io/Mini-project-2/" target="_blank"><img src="./Cheatsheet.png"
                            alt="Gray website of css cheatsheet snippets" class="pic2"></a>
                </div>
            </div>
        </section>
```

This change led to the addition of "display: flex" and flexbox properties to the classes of the added divs.  

```css
.work {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.work-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

## Usage 

Visit website.


![Portfolio Homepage](assets/img/PW%20Gen.jpg)



## Learning Points 

Through the creation on my portfolio, I learned the importance of wireframes in relation to coding html. Labeling tags on wireframes helps with organization.

Prior to this project, I did not recognize the impact div tags have on the formatting of a webpage. I now understand that creating sections of code in html using divs, allows for the implementation of flexboxes in css.

## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga

MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox 


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