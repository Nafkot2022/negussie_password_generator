
function userOptions() {
    var numbers= confirm("do you want numbers")
    console.log(numbers)
}
var generateBtn = document.querySelector("#generate");

function writePassword() {

    var passwordText = document.querySelector("#password");
    userOptions()
    passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);