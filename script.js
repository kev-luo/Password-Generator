// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable for button


// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
    pLength();
    lCase();
    uCase();
    numeric();
    sChar();
}

// function for password length prompt
function pLength() {
    numChar = 0;
    while (numChar < 8 || numChar > 128) {
        var numChar = parseInt(prompt("Number of characters in password (minimum of 8, maximum of 128)"));
    }
    console.log(numChar);
    return numChar;
}

// function for lowercase letters
function lCase() {
    var lowCase = confirm("Should your password include lowercase letters?");
    console.log(lowCase);
    return lowCase;
}

// function for uppercase letters
function uCase() {
    var upCase = confirm("Should your password include uppercase letters?");
    console.log(upCase);
    return upCase;
}

// function for numbers
function numeric() {
    var numb = confirm("Should your password include numbers?");
    console.log(numb);
    return numb;
}

// function for special characters
function sChar() {
    var speChar = confirm("Should your password include special characters?");
    console.log(speChar);
    return speChar;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// add event listener when button is clicked. function should present series of prompts for password criteria
// prompt for lowercase, uppercase, numeric, and/or special characters - must select at least one
// generate password when all prompts are answered
// generated password should match all criteria
// display generated password in an alert or written to the page

// document.getElementById("password").textContent = "Hello";

