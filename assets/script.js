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
  //click the button to generate a password
  var generateBtn =document.querySelector('generate');


  var passwordLength;
  var confimeLowerCase;
  var confirmeUpperCase;
  var confirmNumber;

  // Array of numeric characters to be included in password

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var choiceArray = [];

//user option function
function userOptions() {
    var numbers= confirm("do you want numbers")
    console.log(numbers)
}
var generateBtn = document.querySelector("#generate");

//input password function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // userOptions()
    // passwordText.value = password;
    // window.alert('hello');
}
//generate password function
function generatePassword() {
//prompts for password criteria
passwordLength = prompt("choose a length of at least 8 characters and no more than 128 characters")

  //conditional statments 
  if (passwordLength <8 || passwordLength> 128) {
  alert('password lengh did not meet')
  }

if
}
//Event listener
generateBtn.addEventListener("click", writePassword);



