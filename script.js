    // age checker

    function checkEligibility() {

    let age = document.getElementById("age").value;

    if (age === ""){
        document.getElementById("result").textContent = "Please enter your age.";
    }
    else if (age >= 18){
        document.getElementById("result").textContent = "You are eligible to vote.";
    } 
    else{
        document.getElementById("result").textContent = "You are not eligible to vote.";
    }
}


// evenodd checker

function checkEvenOdd() {
    let number = document.getElementById("number").value;
    if (number === "") {
        document.getElementById("evenOddResult").textContent = "Please enter a number.";
    } else if (number % 2 === 0) {
        document.getElementById("evenOddResult").textContent = "The number is even.";
    } else {
        document.getElementById("evenOddResult").textContent = "The number is odd.";
    }
}   
// numberChecking
function numberChecking(){
    let num = document.getElementById("num").value;
    if(num == 0){
        document.getElementById("pos-neg-resul").textContent =
        "Your Number is equal to Zero ."
    }
    else if (num > 0){
         document.getElementById("pos-neg-resul").textContent =
        "Your Number is Positive ."
    }
    else{
        document.getElementById("pos-neg-resul").textContent =
        "Your Number is Negative ."
    }
}