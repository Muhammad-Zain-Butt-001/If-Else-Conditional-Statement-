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
function numberChecking() {

    let num = document.getElementById("num").value;
    if(num == 0){
        document.getElementById("pos-neg-result").textContent =
        "Your Number is equal to Zero ."
    }
    else if (num > 0){
         document.getElementById("pos-neg-result").textContent =
        "Your Number is Positive ."
    }
    else{
        document.getElementById("pos-neg-result").textContent =
        "Your Number is Negative ."
    }
}

// grade calculator
function calculateGrade() {
    let score = document.getElementById("score").value;
    let gradeResult = document.getElementById("gradeResult");

    if (score === "") {
        gradeResult.textContent = "Please enter your score.";
    }else if (score < 0 || score > 100) {
        gradeResult.textContent = "Please enter a valid score between 0 and 100.";
    }else if (score >= 90) {
        gradeResult.textContent = "Your grade is A.";
    } else if (score >= 80) {
        gradeResult.textContent = "Your grade is B.";
    } else if (score >= 70) {
        gradeResult.textContent = "Your grade is C.";
    } else {
        gradeResult.textContent = "Your grade is D.";
    }
}

// leap year checking
function checkLeapYear() { 
    let year = document.getElementById("year").value;
     let leapYearResult = document.getElementById("leapYearResult");
     
     if (year === "") {
         leapYearResult.textContent = "Please enter a year.";
         } else if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { 
            leapYearResult.textContent = "This is a leap year."; 
        } else { 
            leapYearResult.textContent = "This is not a leap year.";
         } 
        }


// checkFailPass

function checkFailPass() {
    let marks = document.getElementById("marks").value;
    let failPassResult = document.getElementById("failPassResult"); 
    
    if (marks === "") {
        failPassResult.textContent = "Please enter your marks.";
    }else if (marks < 0 || marks > 100) {
        failPassResult.textContent = "Please enter valid marks between 0 and 100.";
    } else {
        if (marks >= 50) {
            failPassResult.textContent = "You have passed the exam.";
        } else {
            failPassResult.textContent = "You have failed the exam.";
        }
    }
}