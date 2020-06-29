var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "!@#$%&*?".split("");
var generatePassword = [];

// Add event listener to generate button
// changed to passwordOptions
function passwordOptions() {
  // free type prompt asking user to enter what length pw they want
  var length = prompt("Choose a length between 8 and 128 characters:");
  if (isNaN(length)) {
      alert("Please enter a number.");
      return;
  }
  if (length < 8 || length > 128) {
      alert("Please enter a number between 8 and 128");
        return;
  }

  // user prompts for what they want to include in password
  var specChar = confirm("Click ok to include special characters.");
  var confNum = confirm("Click ok to include numbers.");
  var confLower = confirm("Click ok to include lower case letters.");
  var confUpper = confirm("Click ok to include UPPER case letters.");

  // if user hits cancel on each prompt, will tell them to try again
  // check that there are some options chosen
  if (specChar === false && confNum === false && confLower === false && confUpper === false) {
     alert("Must select at least one character type. Try again.");
      return;
  }

  function passwordRandom(arr,length) {
    debugger;
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      var randomPick = arr[randomIndex];
      generatePassword.push(randomPick);
    }
  }
  passwordRandom();

  // how to include users selections from prompts
  var userChar = [];

  if (confLower) {
    passwordRandom(lowerCase,length);
  }
  if (confUpper) {
    passwordRandom(upperCase,length);
  }
  if (confNum) {
    passwordRandom(numbers,length);
  }

  if (specChar) {
    passwordRandom(special,length);
  }
}
passwordOptions();

function passwordMaker(result) {
  for (let index = 0; index < generatePassword.length; index++) {}
}
passwordMaker();

// creation of random password
// adding together passwordOptions and passwordRandom??
function passwordGenerate() {
  var options = passwordRandom + userChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}
generateBtn.addEventListener("click", passwordOptions());
