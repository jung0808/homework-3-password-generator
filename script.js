// const upperCase =
//const lowercase =
//const specialCharacter =

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  const test = confirm("do you see me?");
  console.log("test: ", test);
  password = "aa";
  passwordText.value = password;
}

function generatePassword() {
  return "Test Passwprd";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
