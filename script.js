// Assignment code here
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
  var number = "0123456789"
  var symbol = "~`!@#$%^&*()_-+={[}]|\:;<,>.?/"
  var userchoice = ""
  var password = ""

  var keyLength = prompt ("How long does your password need to be? pick between 8 and 128 charecters")
  if (keyLength < 8 || keyLength > 128) {
    //window alert

    generatePassword()
  }
  
  var uppercase = confirm (" do you need uppercase letters? ... click OK to continue");
    if (uppercase == true) {
      var userchoice = userchoice.concat(uppercaseABC)
    }
    console.log (userchoice)

  var lowercase = confirm ("does your password need a lowercase letter? ... click OK to continue");
  if (lowercase == true) { 
    var userchoice = userchoice.concat(lowercaseABC)
  }
  console.log (userchoice)

  var numbers = confirm ("does your password also needs a number? ... click OK to continue");
  if (numbers == true) {
    var userchoice = userchoice.concat(number)
  }
  console.log (userchoice)

  var symbols = confirm ("does your password need a symbol? ... click OK to continue");
  if (symbols == true) {
    var userchoice = userchoice.concat(symbol)
  }

  console.log (userchoice)
  for (let index = 0; index < keyLength; index++) {
    password += userchoice[Math.floor(Math.random()*userchoice.length-1)]
    console.log(password)
  }

  return password
 
 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
