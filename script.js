// Global



// main





// Functions

function populateDisplay() {
    const itemOperation = document.querySelector(".item-operation");
    const itemResult = document.querySelector(".item-result");

    digitButtonClick(itemOperation);
}

function digitButtonClick(itemOperation) {
    const digitButton = document.querySelectorAll(".calculator-button");
    const digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log(digitButton.length);

    for (let i = 5; i < digitButton.length; i++) {
        digitButton[i].addEventListener("click", () => {
            itemOperation.textContent = digitArray[i - 5]; 
        });
    }
    console.log(digitButton)
}

function operateNumbers(operator, first, second) {
    switch (operator) {
        case "+":
            return addNumbers(+first, +second);
        case "-":
            return subtractNumbers(+first, +second);
        case "✕":
            return multiplyNumbers(+first, +second);
        case "÷":  
            return divideNumbers(+first, +second);
    }
}

function addNumbers(first, second) {
    return first + second;
}

function subtractNumbers(first, second) {
    return first - second;
}

function multiplyNumbers(first, second) {
    return first * second;
}

function divideNumbers(first, second) {
    const result = ((second / first).toFixed(1));
    return +result;
}