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

// Array of uppercase characters to be included in password
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

// Function to prompt user for password options
function getPasswordOptions() {
  // length, parseInt (?????), prompt("how many chars") (how to prompt???)
  // let to store length of password form user input
  // limitations - if(isNaN(length) === true) (?????)
  // alert("Password length must be a number.")
  // return

  // if(length < 10)
  // alert("......")
  // return

  // let hasSpecialCharacters = confirm
  //  "Click OK to ..."
  // let hasNumberCharacters = confirm
  //  "Click OK to ..."
  // let hasLowerChars = confirm
  //  "Click OK to ..."
  // let has upperCaseChars = confirm
  //  "Click OK to ..."

  // if(hasLowerChars = false && (?????)
  // hasUpperChars = 
  // hasNumberic = 
  // hasSpecial = )
  // alert("Must select at least one character option to generate password")
  // return

  // let passwordOptions = {
    // length: length
    // hasLowerChars: hasLowerChars
    // hasUpperChars: hasUpperChars
    // hasNumericChars: hasNumericChars
    // hasSpecialChars: hasSpecialChars
  }
  // console.log(passwordOptions);
  // return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
 // let ... = Math.floor(Math.random)() * arr.length (?????)
 // let randomElement = arr[randomIndex] (?????)
 // return randomElement
}

// Function to generate password with user input
function generatePassword() {
// let options = generatePassword();
// console.log("options");
// let result = []


// let possibleCharacters = []

// let guaranteeCharacters = []

// if(options.hasSpecialChars)
//  possibleCharacters = possibleCharacters.concat (????) (hasSpecialChars)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);