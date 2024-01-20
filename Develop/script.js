/* 
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() {

  //number of charactors selector and validation
  var numCharacter = prompt("Number of characters (between 8 and 128)?");

  while (isNaN(numCharacter) || numCharacter > 128 || numCharacter < 8) {
    alert("Please try again. Must choose a number between 8 and 128");
    numCharacter = prompt("Number of characters (between 8 and 128)?");
  }

  //Lowercase selector and validation
  var lowerCase = prompt("Include lowercase characters? (y or n)");

  while (lowerCase !== "y" && lowerCase !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    lowerCase = prompt("Include lowercase characters? (y or n)?");
  }


  //lowercase selector and validation
  var upperCase = prompt("Include uppercase characters? (y or n)");

  while (upperCase !== "y" && upperCase !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    upperCase = prompt("Include uppercase characters? (y or n)?");
  }

  //special character selector and validation
  var specialChar = prompt("Include special characters? (y or n)");

  while (specialChar !== "y" && specialChar !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    specialChar = prompt("Include special characters? (y or n)?");
  }

}
  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);