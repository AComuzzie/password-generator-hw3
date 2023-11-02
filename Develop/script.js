// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var resultArray = [];
  var userArray = [];


  var passwordLength = prompt ("Select password length (8-128 characters)");
  var numbers = confirm ("Include number in your password?");
  var uppercase = confirm ("Include uppercase letters in your password?");
  var lowercase = confirm ("Include lowercase letters in your password?");
  var specialChar = confirm ("Include special characters in your password?");

  if (numbers) {
    resultArray = resultArray.concat(numArray);
  }

  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  if (specialChar) {
    resultArray = resultArray.concat(specialCharArray);
  }
  console.log(resultArray)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
