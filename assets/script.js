//Array of special character to include in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of special characters to be included in password
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
   // Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //click the button to generate a password
var generateBtn =document.querySelector('generate');


var choiceArray = [];

//user option function
function userOptions() {
  var passwordLength = prompt ("Choose password length between 8 and 128 characters");
  console.log("password length" + passwordLength);
  if (isNaN(passwordLength) === false ){
    if (passwordLength <8 || passwordLength> 128) {
      alert('password lengh did not meet between 8 and 128 characters');
      return; 
      }
  } else {
    alert('please enter a number')
    
  }
    var hasConfirmNumber= confirm("do you want numbers");
    var hasConfirmLowerCase= confirm("do you want lowercase");
    var hasConfirmSpecialCharacters= confirm("do you want special characters");
    var hasConfirmUpperCase=confirm("do you want uppercase");
    //check user selections
    if (hasConfirmNumber == false && hasConfirmSpecialCharacters == false && hasConfirmUpperCase == false && hasConfirmLowerCase == false){
      alert("please select at least one character type" );
      return;
    } 

  var passwordOptions = {
    length: passwordLength,
    hasNumber: hasConfirmNumber,
    hasUpperCase: hasConfirmUpperCase,
    hasLowerCase: hasConfirmLowerCase,
    hasSpecialCharacters: hasConfirmSpecialCharacters,
  };
  return passwordOptions;
}
var generateBtn = document.querySelector("#generate");

//input password function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
}
//generate password function
function generatePassword() {
 var options = userOptions();
 
 console.log(options.hasUpperCase);
 
//create variable aaray of options for password
var possibleCharacters = []
if (options.hasUpperCase){
  //store 
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
 
if (options.hasSpecialCharacters){
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}
if (options.hasLowerCase){
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
}
console.log(possibleCharacters);
if (options.hasNumber){
  possibleCharacters = possibleCharacters.concat(numericCharacters);
}
}
}

//Event listener
generateBtn.addEventListener("click", writePassword);



