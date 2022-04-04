// ---------------------CODE START-------------------------------


// Determine what we can use for our password


var promptNum = prompt("How many characters")
// if (promptNum = NaN) {
//     alert("Please use whole numbers, refresh the page to start again")
// }
var confirmSpe = confirm("Do you want special characters")
var confirmUp = confirm("Include upper case?")


// --------------------------------------------------------------


// Character choices

var numPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowPool = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
var upPool = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
var spePool = ['!', '@', '#', '$', '%', '^', '&', '*']
var passwordPool = [];


// This if statement group will narrow down the user choices by making a new array called passwordPool


if (confirmSpe && confirmUp) {
    passwordPool = lowPool.concat(numPool, upPool, spePool)
}
// else if (confirmSpe || confirmUp) {
//     passwordPool = numPool.concat(lowPool);
// }

console.log(passwordPool)

// -----------------------------Randomizer Global Variable---------------

var randChar = passwordPool[Math.floor(Math.random()*passwordPool.length)];
// function randomizer (){
// var randChar = passwordPool[Math.floor(Math.random()*passwordPool.length)];

// console.log(randChar)
// }



// ---------------Return values from arrays included in the passwordPool until input number from promptNum is compleated--------------

// Loop the Randomizer Function here until it prints out randPool value promptNum amounts of times

function makepassword() {
    var password =""
    for (var i= 0; i < promptNum; i++) {
       password += randChar[i]
    }
    console.log(password);
    
    return password;


   
}

makepassword();


// ----------------------CODE ENDS---------------------------------
