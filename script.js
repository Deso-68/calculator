// Global



// main





// Functions

function populateDisplay() {
    const itemOperation = document.querySelector(".item-operation");
    const itemResult = document.querySelector(".item-result");

}

function operateNumbers(operator, first, second) {
    switch (operator) {
        case "+":
            return addNumbers(first, second);
        case "-":
            return subtractNumbers(first, second);
        case "*":
            return multiplyNumbers(first, second);
        case "/":  
            return divideNumbers(first, second);
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
    return first / second;
}