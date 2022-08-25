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

var generateBtn =document.querySelector('generate');
var choiceArray = [];

//user option function
function userOptions() {

  var passwordLength = prompt ("How many characters would you like your password to contain?");
  //console.log("password length" + passwordLength);
  if (isNaN(passwordLength) === false ){
    if (passwordLength <8 || passwordLength> 128) {
      alert('Password length must be a number between 8-128 characters!');
      return;
    }     
  }
  //
  var hasConfirmNumber= confirm("Click ok to include Numeric characters");
  var hasConfirmLowerCase= confirm("Click ok to include LowerCase characters");
  var hasConfirmSpecialCharacter= confirm("Click ok to include Special characters");
  var hasConfirmUpperCase= confirm("click ok to include UpperCase characters");

    if (hasConfirmNumber === false && hasConfirmSpecialCharacter === false && hasConfirmUpperCase === false && hasConfirmLowerCase === false){
      alert("please select at least one character type" );
      return;
    } 

  var passwordOptions = {
    length: passwordLength,
    hasNumber: hasConfirmNumber,
    hasUpperCase: hasConfirmUpperCase,
    hasLowerCase: hasConfirmLowerCase,
    hasSpecialCharacter: hasConfirmSpecialCharacter,
  };

  //console.log(passwordOptions);
  return passwordOptions;
}
var generateBtn = document.querySelector("#generate"); //question?

//input password function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password
}
//generate password function
function generatePassword() {
  var options = userOptions();
  //create variable aaray of options for password
  var possibleCharacters = []
  if (options.hasUpperCase){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters); //store
  } 
  if (options.hasSpecialCharacter){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (options.hasLowerCase){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.hasNumber){
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  //console.log(possibleCharacters);

  var result =[]
  for (var i=0; i < options.length; i++){
    var c = getRandomCharacters(possibleCharacters);
    result.push(c);
  }
  return result;
}

function getRandomCharacters(availableCharacters){
  var randomIndex= Math.floor(Math.random() * availableCharacters.length)
  return availableCharacters[randomIndex];
}

//Event listener
generateBtn.addEventListener("click", writePassword);



