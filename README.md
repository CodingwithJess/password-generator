# password-generator

### Summary
* HTML and CSS and Javascript documents create a random password generator 
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document

### This project has the following features: 
* A generate button
    * This will send the user a series of prompts and confirms
    * After user data is collected, a random password will be generated using Javascript
* A Textarea
    * This textarea will display the users password once it is generated

### This project has script features of:
* Variable declaration area 
* An event listener (onclick) called generatePassword
    * This will prompt the user for input between 8-128
    * This will validate that the input is a number within range, or is a number
    * This then uses the input to determine the types (or choices) of letters or characters used
    * This then assigns values to the variables using arrays for special characters, numbers, upper case, or lower case.
* Another variable is created to concatenate the above variables
* A for loop will loop through the enter prompt until it reaches the number entered by user. 
* A password variable takes the value from the for loop, and converts it to a string. 
* The string value then populates into the text area for the user.


### To Execute File:
> Open in browser

### Features: 
* One HTML Pages
    * Index.html 
        * Contains basic user input items and buttons with divs and ids
* One CSS Page
    * Styles.css
        * Contains centering and styling for html user input features
        * Contains media queries for mobile sizing 
* One Javascript Page
        * Contains: 
        * Variables, including arrays and value placeholders
        * Two event listeners
        * if/else statements
        * One function outside of first event listener


