// Global



// main
populateDisplay();




// Functions

function populateDisplay() {
    let calculatorObject = {};
    calculatorObject.leftOperand = document.querySelector(".first-digit");
    calculatorObject.operator = document.querySelector(".item-operator");
    calculatorObject.rightOperand = document.querySelector(".second-digit");
    calculatorObject.resultDisplay = document.querySelector("p.item-result")
    calculatorObject.buttonNode = document.querySelectorAll(".calculator-button");
    calculatorObject.clearButton = document.querySelector("button.clear-button");
    obj = calculatorObject;
    bindEventToleftOperand(calculatorObject);

    bindEventToOperator(calculatorObject);

    bindEventToRightOperand(calculatorObject);

    bindEventEqualsTo(calculatorObject);

    clearAllButton(calculatorObject);
}

function bindEventEqualsTo(calculatorObject) {
    calculatorObject.buttonNode[4].addEventListener("click", () => {
        const a = calculatorObject.operator.textContent;
        const b = calculatorObject.rightOperand.textContent;
        const c = calculatorObject.leftOperand.textContent; 

        const result = operateNumbers(a, b ,c);
        if(a !== "" && b !== "" && c !== "") {
            const result = operateNumbers(a, b ,c);
            calculatorObject.resultDisplay.textContent = result;
            calculatorObject.rightOperand.textContent = "";
            calculatorObject.operator.textContent = "";
        }
    });
}

function clearAllButton(calculatorObject) {
    calculatorObject.clearButton.addEventListener("click", () => {
        calculatorObject.resultDisplay.textContent = 0;
        calculatorObject.rightOperand.textContent = "";
        calculatorObject.leftOperand.textContent = "";
        calculatorObject.operator.textContent = "";
    });
}

function bindEventToRightOperand(calculatorObject) {
    for (let i = 5; i < calculatorObject.buttonNode.length; i++) {
        handler = () => concatenateSecondDigit(calculatorObject, i);
        calculatorObject.buttonNode[i].addEventListener("click", handler);
    }
}

function concatenateSecondDigit(calculatorObject, i) {
    const a = calculatorObject.rightOperand.textContent; 
    const b = calculatorObject.buttonNode[i].textContent;
    const c = a + b;    

    if(calculatorObject.operator.textContent !== "" && 
        calculatorObject.leftOperand.textContent !== "") {
        calculatorObject.rightOperand.textContent = c; 
    }
}

function bindEventToOperator(calculatorObject) {
    for (let i = 0; i < calculatorObject.buttonNode.length - 11; i++) {
        handler = () => showOperator(calculatorObject, i);
        calculatorObject.buttonNode[i].addEventListener("click", handler);
    }
}

function showOperator(calculatorObject, i) {
    if(calculatorObject.leftOperand.textContent !== "" &&
        calculatorObject.rightOperand.textContent === "") {
        calculatorObject.operator.textContent = calculatorObject.buttonNode[i].textContent;
    }
}

function bindEventToleftOperand(calculatorObject) {
    for (let i = 5; i < calculatorObject.buttonNode.length; i++) {
        handler = () => concatenateFirstDigit(calculatorObject, i);
        calculatorObject.buttonNode[i].addEventListener("click", handler);
    }
}

function concatenateFirstDigit(calculatorObject, i) {
    const a = calculatorObject.leftOperand.textContent; 
    const b = calculatorObject.buttonNode[i].textContent;
    const c = a + b;    

    if(calculatorObject.operator.textContent === "" && 
        calculatorObject.rightOperand.textContent === "") {
            calculatorObject.leftOperand.textContent = c;
        } 

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