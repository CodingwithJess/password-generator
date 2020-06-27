// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split ("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ("");
var numbers = "1234567890".split ("");
var special = "!@#$%&*?".split("");

// var userPassword = [...lowerCase, ...upperCase, ...numbers, ...special]
function passwordOptions (){
  var length = prompt("Choose a length between 8 and 128 characters:")
  if (isNaN(length)=== true ){
    alert("Please enter a number.")
    return
  }
  if (length<8||length>128){
    alert("Please enter a number between 8 and 128")
    return
  }

  var specChar = confirm("Click ok to include special characters.")
  var confNum = confirm("Click ok to include numbers.")
  var confLower = confirm("Click ok to include lower case letters.")
  var confUpper = confirm("Click ok to include UPPER case letters.")

  if (specChar===false&&confNum===false&&confLower===false&&confUpper===false){
    alert("Must select at least one character type. Try again.")
    return
  }

  // prompt answers -length and true or false for else
  var passwordOptions ={
    length : length,
    specChar : specChar,
    confNum : confNum, 
    confLower : confLower,
    confUpper : confUpper,
  }
  return passwordOptions
}

// creation of random password
function passwordRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}
// adding together passwordOptions and passwordRandom??

function passwordGenerate(){
  var options = passwordOptions();
}

passwordOptions()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
