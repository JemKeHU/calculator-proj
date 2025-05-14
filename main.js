let numberOne = 2;
let operator = "";
let numberTwo = 8;

const add = (numOne, numTwo) => {
    return numOne + numTwo;
};

const subtract = (numOne, numTwo) => {
    return numOne - numTwo;
};

const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
};

const divide = (numOne, numTwo) => {
    if (!numTwo) {
        return "can't divide by zero";
    }
    return numOne / numTwo;
};

const operate = (operation, numOne, numTwo) => {
    switch(operation) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        default:
            return "ERROR";
    }
};

console.log(operate(operator, numberOne, numberTwo));