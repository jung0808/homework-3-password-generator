// const upperCase =
//const lowercase =
//const specialCharacter =

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var sizeOfPasswordQuestion = prompt(
    "Please enter the length of the password between 8 and 128 characters"
  );
  if (sizeOfPasswordQuestion < 8) {
    alert("Please enter number greater than 8 characters!");
  } else if (sizeOfPasswordQuestion > 128) {
    alert("Please enter number less than 128 characters!");
  }
  const lowerCaseQuestion = confirm("Do you want lowercase in your password?");
  const upperCaseQuestion = confirm("Do you want uppercase in your password?");
  const numericQuestion = confirm("Do you want nummbers in your password?");
  const specialCharacterQuestion = confirm(
    "Do you want special character in your password?"
  );
}
// console.log(sizeOfPassword);
// if (sizeOfPassword < 8) {
//   alert("Please enter number greater than 8 characters!");
// }
// const test = prompt("do you see me?");
// console.log("test: ", test);
// password = "aa";
// passwordText.value = password;

// function generatePassword() {
//   return "Test Passwprd";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// console.log(Math.floor(Math.random() * 26));

//console.log(Math.random());
