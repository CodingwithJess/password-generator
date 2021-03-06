var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "!@#$%&*?".split("");

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
  var options = {
    length : length,
    specChar : specChar,
    confNum : confNum,
    confLower : confLower,
    confUpper : confUpper,
  }
  return options;
}

  function passwordRandom(arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      var randomPick = arr[randomIndex];
    
      return randomPick;
  }

// creation of random password
// adding together passwordOptions and passwordRandom??
function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possChar = [];
  var guarChar = [];
  
  if (options.confLower){
    possChar= possChar.concat(lowerCase);
    guarChar.push(passwordRandom(lowerCase)) 
  }if (options.confUpper){
    possChar= possChar.concat(upperCase);
    guarChar.push(passwordRandom(upperCase)) 
  }if (options.confNum){
    possChar= possChar.concat(numbers);
    guarChar.push(passwordRandom(numbers)) 
  }if (options.specChar){
    possChar= possChar.concat(special);
    guarChar.push(passwordRandom(special)) 
  }

  for (var i = 0; i < options.length; i++){
    var possibleChar= passwordRandom(possChar)
    result.push(possibleChar)
  }

  for (var i =0; i < guarChar.length; i++){
    result[i]=guarChar[i]
  }

  return result.join("");
}

var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}
generateBtn.addEventListener("click", writePassword);
