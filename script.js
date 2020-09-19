// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable for button
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"; // variable for lowercase letters
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // variable for uppercase letters
var numbersList = "0123456789"; // variable for numberes
var specialCharacters = " !\"\#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~"; // variable for special characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    document.getElementById("password").textContent = generatePassword();
};

// function to generate random string
function generatePassword() {
    var finalString = '';
    var charList = '';
    var lengthy = pLength();
    var littleL = lCase();
    var bigL = uCase();
    var numero = numeric();
    var especial = sChar();
    
    // add to the charList string based on user responses
    if (littleL) {
        charList += lowerLetters;
    };
    if (bigL) {
        charList += upperLetters;
    };
    if (numero) {
        charList += numbersList;
    };
    if (especial) {
        charList += specialCharacters;
    };
    if (!littleL && !bigL && !numero && !especial) {
        alert("Your password must contain at least 1 of the following: lowercase letter, uppercase letters, numbers, or special characters");
    } else {
        for (var i=0; i<lengthy; i++) {
            finalString += charList.charAt(Math.floor(Math.random() * charList.length));
        };
        return finalString;
    };
};

// function for password length prompt
function pLength() {
    numChar = 0;
    while (numChar < 8 || numChar > 128) {
        var numChar = parseInt(prompt("Number of characters in password (minimum of 8, maximum of 128)"));
    }
    console.log(numChar);
    return numChar;
};

// function for lowercase letters
function lCase() {
    var lowCase = confirm("Should your password include lowercase letters?");
    console.log(lowCase);
    return lowCase;
};

// function for uppercase letters
function uCase() {
    var upCase = confirm("Should your password include uppercase letters?");
    console.log(upCase);
    return upCase;
};

// function for numbers
function numeric() {
    var numb = confirm("Should your password include numbers?");
    console.log(numb);
    return numb;
};

// function for special characters
function sChar() {
    var speChar = confirm("Should your password include special characters?");
    console.log(speChar);
    return speChar;
};