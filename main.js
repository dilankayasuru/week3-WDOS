const largestNum1 = document.getElementById("largestNum1");
const largestNum2 = document.getElementById("largestNum2");
const findLargestBtn = document.getElementById("findLargest");

const mostLargestNum1 = document.getElementById("mostLargestNum1");
const mostLargestNum2 = document.getElementById("mostlargestNum2");
const mostLargestNum3 = document.getElementById("mostLargestNum3");
const findMostLargestBtn = document.getElementById("findMostLargest");

const evalNum1 = document.getElementById("evalNum1");
const evalNum2 = document.getElementById("evalNum2");
const operationType = document.getElementById("operation");
const calculateBtn = document.getElementById("calculate");

const marksInput = document.getElementById("marks");
const findGradeBtn = document.getElementById("findGrade");

const largestNumberOutput = document.getElementById("largestNumberOutput");
const mostLargestNumberOutput = document.getElementById("mostLargestNumberOutput");
const evalNumOutput = document.getElementById("evalNumOutput");
const findGradeOutput = document.getElementById("findGradeOutput");


findLargestBtn.addEventListener("click", findLargest);
findMostLargestBtn.addEventListener("click", findMostLargest);
calculateBtn.addEventListener("click", evalNumbers);
findGradeBtn.addEventListener("click", findGrade);

function findLargest() {
    let num1 = 0;
    let num2 = 0;

    num1 = parseFloat(largestNum1.value);
    num2 = parseFloat(largestNum2.value);

    console.log(num1)
    console.log(num2)

    if (num1 > num2) {
        console.log(`${num1} is the Largest number`);
        largestNumberOutput.innerText = `${num1} is the Largest number`;
    }
    else if (num2 > num1) {
        console.log(`${num2} is the Largest number`);
        largestNumberOutput.innerText = `${num2} is the Largest number`;
    }
    else {
        console.log("Num1 and Num2 are equal");
        largestNumberOutput.innerText = "Num1 and Num2 are equal";
    }

    largestNum1.value = "";
    largestNum2.value = "";
}

function findMostLargest() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    num1 = parseFloat(mostLargestNum1.value);
    num2 = parseFloat(mostLargestNum2.value);
    num3 = parseFloat(mostLargestNum3.value);

    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is the largest number`);
        mostLargestNumberOutput.innerText = `${num1} is the largest number`;
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} is the largest number`);
        mostLargestNumberOutput.innerText = `${num2} is the largest number`;
    }
    else if (num3 > num1 && num3 > num2) {
        console.log(`${num3} is the largest number`);
        mostLargestNumberOutput.innerText = `${num3} is the largest number`;
    } else {
        console.log("Numbers are equal");
        mostLargestNumberOutput.innerText = "Numbers are equal";
    }

    mostLargestNum1.value = "";
    mostLargestNum2.value = "";
    mostLargestNum3.value = "";
}


function evalNumbers() {
    let num1 = 0;
    let num2 = 0;
    let operation;
    let result = 0;

    num1 = parseFloat(evalNum1.value);
    num2 = parseFloat(evalNum2.value);
    operation = operationType.value.toLowerCase();

    switch (operation) {
        case "add":
            result = num1 + num2
            console.log(result);
            evalNumOutput.innerText = `${num1} + ${num2} = ${result}`;
            break;

        case "substract":
            result = num1 - num2
            console.log(result)
            evalNumOutput.innerText = `${num1} - ${num2} = ${result}`;
            break;

        case "multiply":
            result = num1 * num2
            console.log(result)
            evalNumOutput.innerText = `${num1} * ${num2} = ${result}`;
            break;

        case "divide":
            result = num1 / num2
            console.log(result)
            evalNumOutput.innerText = `${num1} / ${num2} = ${result}`;
            break;

        case "modulus":
            result = num1 % num2
            console.log(result)
            evalNumOutput.innerText = `${num1} % ${num2} = ${result}`;
            break;

        default:
            console.log("Invalid operation");
            evalNumOutput.innerText = "Invalid Operation";
    }

    evalNum1.value = ""
    evalNum2.value = ""
    operationType.value = ""

}

function findGrade() {
    let marks = 0;

    marks = parseFloat(marksInput.value);

    if (marks >= 90 && marks <= 100) {
        console.log("S grade");
        findGradeOutput.innerText = "S grade"
    }
    else if (marks >= 80 && marks < 90) {
        console.log("A grade");
        findGradeOutput.innerText = "A grade"
    }
    else if (marks >= 70 && marks < 80) {
        console.log("B grade");
        findGradeOutput.innerText = "B grade"
    }
    else if (marks >= 60 && marks < 70) {
        console.log("C grade");
        findGradeOutput.innerText = "C grade"
    }
    else if (marks >= 50 && marks < 60) {
        console.log("D grade");
        findGradeOutput.innerText = "D grade"
    }
    else if (marks >= 40 && marks < 50) {
        console.log("E grade");
        findGradeOutput.innerText = "E grade"
    }
    else if (marks >= 0 && marks < 40) {
        console.log("Student has failed");
        findGradeOutput.innerText = "Student has failed"
    }
    else {
        console.log("Invalid Marks");
        findGradeOutput.innerText = "Invalid Marks"
    }

    marksInput.value = "";
}
