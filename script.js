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

// largest number
function checkLargestNumber() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    let largestResult = document.getElementById("largestNumberResult");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        largestResult.textContent = "Please enter all three numbers.";
    } else {
        let largest;

        if (num1 >= num2 && num1 >= num3) {
            largest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }

        largestResult.textContent = "The largest number is: " + largest;
    }
}

// validateLogin

function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginValidationResult = document.getElementById("loginValidationResult");

    if (username === "" || password === "") {
        loginValidationResult.textContent = "Please enter both username and password.";
    } else if (username === "admin" && password === "admin") {
        loginValidationResult.textContent = "Login successful!";
    } else {
        loginValidationResult.textContent = "Invalid username or password.";
    }
}

// checkVowelConsonant
function checkVowelConsonant() {
    let letter = document.getElementById("letter").value;
    let vowelConsonantResult = document.getElementById("vowelConsonantResult");

    if (letter === "") {
        vowelConsonantResult.textContent = "Please enter a letter.";
    } else if (letter.length !== 1 || !isNaN(letter)) {
        vowelConsonantResult.textContent = "Please enter a valid single letter.";
    } else {
        letter = letter.toLowerCase();
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowelConsonantResult.textContent = "This is a vowel.";
        } else {
            vowelConsonantResult.textContent = "This is a consonant.";
        }
    }
}

// checkDayOfWeek
function checkDayOfWeek() {
    let dayNumber = document.getElementById("dayNumber").value;
    let dayOfWeekResult = document.getElementById("dayOfWeekResult");

    if (dayNumber === "") {
        dayOfWeekResult.textContent = "Please enter a number.";
}else if(dayNumber == "1"){
        dayOfWeekResult.textContent = "Monday";
}else if(dayNumber == "2"){
        dayOfWeekResult.textContent = "Tuesday";
}else if(dayNumber == "3"){
        dayOfWeekResult.textContent = "Wednesday";
}else if(dayNumber == "4"){
        dayOfWeekResult.textContent = "Thursday";
}else if(dayNumber == "5"){
        dayOfWeekResult.textContent = "Friday";
}else if(dayNumber == "6"){
        dayOfWeekResult.textContent = "Saturday";
}else if(dayNumber == "7"){
        dayOfWeekResult.textContent = "Sunday";
}else {
        dayOfWeekResult.textContent = "please enter the number between 1 to 7";
}
}

//  checkTemprature
function checkTemprature() {
    let temprature = document.getElementById("temprature").value;
    let tempratureResult = document.getElementById("tempratureResult");

    if (temprature === "") {
        tempratureResult.textContent = "Please enter a temprature.";
    } else if (temprature >= 30) {
        tempratureResult.textContent = "The weather is too hot.";
    } else if (temprature >= 10) {
        tempratureResult.textContent = "The weather is hot.";
    } else if (temprature >= 0) {
        tempratureResult.textContent = "The weather is normal.";
    } else if (temprature >= -10) {
        tempratureResult.textContent = "The weather is cool.";
    } else {
        tempratureResult.textContent = "The weather is too cool.";
    }
}


//  checkAgeCategory

function checkAgeCategory() {
    let age = document.getElementById("agee").value;
    let ageCategoryResult = document.getElementById("ageCategoryResult");

    if (age === "") {
        ageCategoryResult.textContent = "Please enter an age.";
    } else if (age >= 70) {
        ageCategoryResult.textContent = "You are an elderly person.";
    } else if (age >= 30) {
        ageCategoryResult.textContent = "You are a young person.";
    } else if (age >= 18) {
        ageCategoryResult.textContent = "You are an adult.";
    } else if (age >= 10) {
        ageCategoryResult.textContent = "You are a teenager.";
    } else if (age >= 3) {
        ageCategoryResult.textContent = "You are a child.";
    } else {
        ageCategoryResult.textContent = "You are a baby.";
    }
}

function checkshoppinglist() {
    let shopping = document.getElementById("shopping").value;
    let shoppingCardResult = document.getElementById("shoppingCardResult");

    if (shopping === "") {
        shoppingCardResult.textContent = "Please enter your shopping price.";
    } else if (shopping >= 10000) {
        shoppingCardResult.textContent = "You got Rs. 3000 discount.";
    } else if (shopping >= 5000) {
        shoppingCardResult.textContent = "You got Rs. 1000 discount.";
    } else if (shopping >= 1000) {
        shoppingCardResult.textContent = "You got Rs. 300 discount.";
    } else {
        shoppingCardResult.textContent = "Sorry, no discount available.";
    }
}


function checkPasswordStrength() {
    let password = document.getElementById("passWord").value;
    let passwordStrengthResult = document.getElementById("passwordStrengthResult");

    if (password === "") {
        passwordStrengthResult.textContent = "Please enter a password.";
    } else if (password.length >= 12) {
        passwordStrengthResult.textContent = "Your password is very strong.";
    } else if (password.length >= 8) {
        passwordStrengthResult.textContent = "Your password is strong.";
    } else if (password.length >= 6) {
        passwordStrengthResult.textContent = "Your password is medium.";
    } else {
        passwordStrengthResult.textContent = "Your password is weak.";
    }
}


function calculateNumbers() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let operator = document.getElementById("operator").value;
    let calculatorResult = document.getElementById("calculatorResult");

    if (firstNumber === "" || secondNumber === "" || operator === "") {
        calculatorResult.textContent = "Please enter both numbers and an operator.";
    } else if (operator === "+") {
        calculatorResult.textContent = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-") {
        calculatorResult.textContent = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*") {
        calculatorResult.textContent = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/") {
        if (Number(secondNumber) === 0) {
            calculatorResult.textContent = "You cannot divide by zero.";
        } else {
            calculatorResult.textContent = Number(firstNumber) / Number(secondNumber);
        }
    } else {
        calculatorResult.textContent = "Please enter a valid operator.";
    }
}