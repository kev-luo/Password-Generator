// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable for button
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // variable for lowercase letters
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; // variable for uppercase letters
var numbersList = ['0','1','2','3','4','5','6','7','8','9']; // variable for numberes
var specialCharacters = ['"',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',]; // variable for special characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    document.getElementById("password").textContent = generatePassword();
};

// function to generate random string
function generatePassword() {
    var finalString = [];
    var charList = [];
    var lengthy = pLength();
    var littleL = lCase();
    var bigL = uCase();
    var numero = numeric();
    var especial = sChar();
    
    // add to the charList string based on user responses
    if (littleL) {
        charList = charList.concat(lowerLetters);
    };
    if (bigL) {
        charList = charList.concat(upperLetters);
    };
    if (numero) {
        charList = charList.concat(numbersList);
    };
    if (especial) {
        charList = charList.concat(specialCharacters);
    };
    if (!littleL && !bigL && !numero && !especial) {
        alert("Your password must contain at least 1 of the following: lowercase letter, uppercase letters, numbers, or special characters");
    } else {
        for (var i=0; i<lengthy; i++) {
            finalString = finalString.concat(charList[Math.floor(Math.random() * charList.length)]);
        };
        while (!(checkLittle(finalString)==littleL && checkBig(finalString)==bigL && checkNumero(finalString)==numero && checkEspecial(finalString)==especial)) {
            finalString = [];
            for (var i=0; i<lengthy; i++) {
                finalString = finalString.concat(charList[Math.floor(Math.random() * charList.length)]);
            };
        };
        return finalString.join('');
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

// function to check if final generated password contains lowercase letter(s)
function checkLittle(finalString) {
    var littleCheck = lowerLetters.some(function (item) {
        return finalString.indexOf(item) > -1;
    })
    return littleCheck;
};

// function to check if final generated password contains uppercase letter(s)
function checkBig(finalString) {
    var bigCheck = upperLetters.some(function (item) {
        return finalString.indexOf(item) > -1;
    })
    return bigCheck;
};

// function to check if final generated password contains number(s)
function checkNumero(finalString) {
    var numeroCheck = numbersList.some(function (item) {
        return finalString.indexOf(item) > -1;
    })
    return numeroCheck;
};

// function to check if final generated password contains special character(s)
function checkEspecial(finalString) {
    var especialCheck = specialCharacters.some(function (item) {
        return finalString.indexOf(item) > -1;
    })
    return especialCheck;
};