let numberOne = 82;
let numberTwo = 2;
let operator = "+";
let input = document.querySelector("input");

const sections = document.querySelectorAll(".sect");

for (const section of sections) {
    section.addEventListener("click", (e) => {
        let target = e.target;

        if (target.id === "number") {
            console.log(target.innerText);
        } else {
            console.log(target.id);
        }
    });
}

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
            input.value = add(numOne, numTwo);
            break;
        case "-":
            input.value = subtract(numOne, numTwo);
            break;
        case "*":
            input.value = multiply(numOne, numTwo);
            break;
        case "/":
            input.value = divide(numOne, numTwo);
            break;
        default:
            input.value = "ERROR";
    }
};

console.log(operate(operator, numberOne, numberTwo));
numberOne = 0;
numberTwo = 0;
operator = "";