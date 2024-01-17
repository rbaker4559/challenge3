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

//generates password
function generatePassword() {
  var characterCount = getCharacterCount();
  var inclLower = inclLower();
  var inclUpper = inclUpper();
  var inclNumeric = inclNumeric();
  var inclSpecial = inclSpecial();


  /*
  Function
  Assigns character count
  Re-Inits if parameters not met
  */
  function getCharacterCount() {
    characterCount = prompt ("Length of password (min 8 characters; max 128 characters");
    if (isNaN(characterCount) === true) {
      alert ("Please try again. Input must be a NUMBER.");
      getCharacterCount();
    } else if (characterCount < 8) {
      alert ("Number cannot be LESS THAN 8. Please select a value between 8 and 128 characters.");
      getCharacterCount();
    } else if (characterCount > 128) {
      alert ("Number cannot be GREATER THAN 128. Please select a vaue between 8 and 128 characters.");
      getCharacterCount();
    } else {
      return;
    }
  }

  /*
  Function
  Assigns input as y or n
  Re-Inits if parameters not met
  */
  function inclLower() {
    inclLower = prompt ("Contain lowercase characters? (Y/N)");
    if (inclLower == "y") {
      return;
    } else if (inclLower == "n") {
      return;
    } else {
      alert ("Try again. Please select EITHER y or n. No other characters allowed.");
      inclLower();
    }
  }
  /*
  var inclUpper = prompt ("Contain uppercase characters? (Y/N)");
  var inclNumeric = prompt ("Contain numeric characters? (Y/N)");
  var inclSpecial = prompt ("Contain special characters? (Y/N)");
  */
};

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);