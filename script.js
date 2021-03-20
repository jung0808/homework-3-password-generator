const upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacterArr = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var sizeOfPasswordQuestion = prompt(
    "Please enter the length of the password between 8 and 128 characters"
  );
  if (sizeOfPasswordQuestion < 8) {
    alert("Please enter number greater than 8 characters!");
    return; //generatepassword();
  } else if (sizeOfPasswordQuestion > 128) {
    alert("Please enter number less than 128 characters!");
    return;
  }

  const lowerCaseQuestion = confirm("Do you want lowercase in your password?");
  const upperCaseQuestion = confirm("Do you want uppercase in your password?");
  const numericQuestion = confirm("Do you want nummbers in your password?");
  const specialCharacterQuestion = confirm(
    "Do you want special character in your password?"
  );

  let possibleCharacters = [];

  if (lowerCaseQuestion) {
    possibleCharacters = possibleCharacters.concat(lowerCaseArr);
    //add lowercase to possibleCharacters. if False do not add.
    console.log(possibleCharacters);
    console.log(lowerCaseArr.length);
    // var index = Math.floor(Math.random() * lowerCaseArr(possiblecharacters).length);
  }
  if (upperCaseQuestion) {
    possibleCharacters = possibleCharacters.concat(upperCaseArr);
    console.log(possibleCharacters);
    console.log(upperCaseArr.length);
  }
  if (numericQuestion) {
    possibleCharacters = possibleCharacters.concat(numericArr);
    console.log(possibleCharacters);
    console.log(numericArr.length);
  }
  if (specialCharacterQuestion) {
    possibleCharacters = possibleCharacters.concat(specialCharacterArr);
    console.log(possibleCharacters);
    console.log(specialCharacterArr.length);
  }

  let randomPassword = "";
  //loop over possible characters;
  for (let i = 0; i < sizeOfPasswordQuestion; i++) {
    randomPassword +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    console.log(randomPassword);
  }

  document.getElementById("password").value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//  return randomPassword;
// }

// js string to numbers
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
