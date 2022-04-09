
// ---------------Loop Function: Creates Password--------------


function makepassword() {
    // ---------------------CODE START-------------------------------

    // Determine what we can use for our password

    // Utilize returns || recursion to loop the generator
    var promptNum =prompt("How many characters")


    if (promptNum < 8 || promptNum > 128) {
        alert("Please pick a number between 8 and 128");
        makepassword();
    }
    if (isNaN(promptNum)) {
        alert("Please use whole numbers")
        makepassword();
    } 

    var confirmSpe = confirm("Do you want special characters")
    var confirmUp = confirm("Include upper case?")


    // --------------------------------------------------------------


    // Character choices

    var numPool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var lowPool = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    var upPool = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    var spePool = ['!', '@', '#', '$', '%', '^', '&', '*']
    var passwordPool = [];


    // This "if" statement group will narrow down the user choices by making a new array called passwordPool


    if (confirmSpe && confirmUp) {
        passwordPool = passwordPool.concat(numPool, upPool, spePool, lowPool)
    }
    else if (confirmSpe == false && confirmUp) {
        passwordPool = passwordPool.concat(numPool, upPool, lowPool)
    }
    else if (confirmSpe && confirmUp == false) {
        passwordPool = passwordPool.concat(numPool, spePool, lowPool)

    }
    else (confirmSpe == false && confirmUp == false); {
        passwordPool = passwordPool.concat(numPool, lowPool)
    }

    var password = " ";
    for (var i = 0; i < promptNum; i++) {
        password += passwordPool[Math.floor(Math.random() * passwordPool.length)]
    }
    console.log(password);

    return password;


}

//makepassword();


// ----------------------CODE ENDS---------------------------------


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    const password = makepassword();
    var logger = document.querySelector("textarea");
    logger.value = password;
});


