// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var useNumbers;
var useSpecialCharacters;
var useUpperCase;
var useLowerCase;

var finalPassword = "";

var specialCharacters = ["$", "#", "@", "%", "?", "*", "^", "!", "+"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d"];
var upperCaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D"];

var allPossibleCharacters = [];
// Write password to the #password input
function generatePassword(){
  var finalPassword = ""
  numberOfCharacters = prompt("Please enter a length between 8 and 128"); 
  if (numberOfCharacters < 8  || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Please enter a valid password length");
    return 
  }
  useNumbers = confirm("Would you like to use Numeric Characters>");
  useSpecialCharacters = confirm("Would you like to use Special Characters?");
  useLowerCase = confirm("Would you like to use Lowercase Letters?");
  useUpperCase = confirm("Would you like to use Uppercase Letters?");
  if (useNumbers === false && useSpecialCharacters === false && useLowerCase === false && useUpperCase === false ) {
    alert("Must select at least (1) character type");
    return
  }
  if (useLowerCase === true ){
   allPossibleCharacters = allPossibleCharacters.concat(lowerCaseLetters)
  }
  if (useUpperCase === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(upperCaseLetters)
  }
  if (useSpecialCharacters === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(specialCharacters)
  }
  if (useNumbers === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(numbers)
  }
 for (var i = 0; i < numberOfCharacters; i ++) {
  var randomIndex = Math.floor(Math.random()*allPossibleCharacters.length);
  finalPassword += allPossibleCharacters[randomIndex];
 }
  return finalPassword;
}


// console.log(numberOfCharacters,useNumbers,useSpecialCharacters,useLowerCase,useUpperCase)
// askQuestion()
// getAllAllowedCharacters()
// buildPassword()
//for loop here
// get random index value
// get character with that index value
//add the character to passowrd string
// return to string
// function askQuestion() {
  
  
  // }

// function getAllAllowedCharacters(){

// }

// function buildPassword(){
//   // finalPassword + = 
// }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
