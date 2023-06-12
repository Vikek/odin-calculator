let a = null;
let b = null;
let operator = null;
let hasOperated = false;

// event listeners for the number buttons
document.querySelector(".zero").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "0";
});

document.querySelector(".one").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "1";
});

document.querySelector(".two").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "2";
});

document.querySelector(".three").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "3";
});

document.querySelector(".four").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "4";
});

document.querySelector(".five").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "5";
});

document.querySelector(".six").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "6";
});

document.querySelector(".seven").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "7";
});

document.querySelector(".eight").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "8";
});

document.querySelector(".nine").addEventListener("click", function() {
    checkOperation();
    document.querySelector("#input").textContent += "9";
});
//////////////////////////////////


// event listeners for the operation buttons
document.querySelector(".divide").addEventListener("click", function() {
    storeValue(document.querySelector("#input").textContent);
    operator = "/";
});

document.querySelector(".multiply").addEventListener("click", function() {
    storeValue(document.querySelector("#input").textContent);
    operator = "*";
});

document.querySelector(".subtract").addEventListener("click", function() {
    storeValue(document.querySelector("#input").textContent);
    operator = "-";
});

document.querySelector(".add").addEventListener("click", function() {
    storeValue(document.querySelector("#input").textContent);
    operator = "+";
});
//////////////////////////////////

document.querySelector(".dot").addEventListener("click", function() {
    let input = document.querySelector("#input").textContent;
    if(input.includes(".") || input.length < 1 || hasOperated) {
        return;
    } else document.querySelector("#input").textContent += ".";
});

document.querySelector(".clear").addEventListener("click", function() {
    clearInput();
    resetValues();
});

document.querySelector(".equals").addEventListener("click", function() {
    if(a && operator) {
        b = document.querySelector("#input").textContent;
        a = +a;
        b = +b;
        operate(a, b, operator);
    } else return;
});

function checkOperation() {
    if(hasOperated) { //if hasOperated is true clear input window before adding new numbers
        clearInput()
        hasOperated = false;
    }
}

function clearInput() {
    document.querySelector("#input").textContent = "";
}

function resetValues() {
    a = null;
    b = null;
    operator = null;
}

function storeValue(value) {
    if(a && operator) {
        b = value;
        a = +a;
        b = +b;
        operate(a, b, operator);
    } else {
        a = value;
        hasOperated = true;
    }
}

function operate(a, b, operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    result = Math.round(result * 100) / 100;
    document.querySelector("#input").textContent = result;
    resetValues();
    storeValue(result);
    hasOperated = true;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
