let numberOne = null;
let numberTwo = null;
let operator = "";
let calculated = false;
let periodCount = 0;
let input = document.querySelector("input");

const sections = document.querySelectorAll(".sect");

for (const section of sections) {
    section.addEventListener("click", (e) => {
        let target = e.target;

        if (target.tagName !== "BUTTON") return;
        if (periodCount === 1) {
            document.querySelector("#period").disabled = true;
        } else {
            document.querySelector("#period").disabled = false;
        }

        if (target.id === "number") {
            if (calculated) {
                input.value = "";
                numberOne = null;
                numberTwo = null;
                calculated = false;
            }
            input.value += target.innerText;
        } else if (target.id === "backspace") {
            if (input.value) {
                if (input.value[input.value.length - 1] === ".") {
                    periodCount = 0
                    input.value = input.value.slice(0, -1);
                } else {
                    input.value = input.value.slice(0, -1);
                }
            }
        } else if (target.id === "period") {
            input.value += "."
            periodCount++;
        } else if (target.id === "add" || target.id === "subtract" || target.id === "divide" || target.id === "multiply") {
            console.log(target.id);
            operator = target.id
            numberOne = input.value;
            input.value = "";
            periodCount = 0;
        } else if (target.id === "display") {
            numberTwo = input.value;
            numberOne = operate(operator, numberOne, numberTwo);
            input.value = `${numberOne}`;
            calculated = true;
            periodCount = 0;
        } else if (target.id === "delete") {
            numberOne = null;
            numberTwo = null;
            input.value = "";
            periodCount = 0;
        }
    });
}

const add = (numOne, numTwo) => {
    return Number(numOne) + Number(numTwo);
};

const subtract = (numOne, numTwo) => {
    return Number(numOne) - Number(numTwo);
};

const multiply = (numOne, numTwo) => {
    return Number(numOne) * Number(numTwo);
};

const divide = (numOne, numTwo) => {
    if (!Number(numTwo)) {
        return "can't divide by zero";
    }
    return Number(numOne) / Number(numTwo);
};

const operate = (operation, numOne, numTwo) => {
    switch(operation) {
        case "add":
            return add(numOne, numTwo);
        case "subtract":
            return subtract(numOne, numTwo);
        case "multiply":
            return multiply(numOne, numTwo);
        case "divide":
            return divide(numOne, numTwo);
        default:
            return "ERROR";
    }
};