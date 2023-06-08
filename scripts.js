let a = 0;
let b = 0;
let operator = "";

// event listeners for the number buttons
document.querySelector(".zero").addEventListener("click", function() {
    document.querySelector("#input").textContent += "0";
});

document.querySelector(".one").addEventListener("click", function() {
    document.querySelector("#input").textContent += "1";
});

document.querySelector(".two").addEventListener("click", function() {
    document.querySelector("#input").textContent += "2";
});

document.querySelector(".three").addEventListener("click", function() {
    document.querySelector("#input").textContent += "3";
});

document.querySelector(".four").addEventListener("click", function() {
    document.querySelector("#input").textContent += "4";
});

document.querySelector(".five").addEventListener("click", function() {
    document.querySelector("#input").textContent += "5";
});

document.querySelector(".six").addEventListener("click", function() {
    document.querySelector("#input").textContent += "6";
});

document.querySelector(".seven").addEventListener("click", function() {
    document.querySelector("#input").textContent += "7";
});

document.querySelector(".eight").addEventListener("click", function() {
    document.querySelector("#input").textContent += "8";
});

document.querySelector(".nine").addEventListener("click", function() {
    document.querySelector("#input").textContent += "9";
});
//////////////////////////////////


// event listeners for the operation buttons
document.querySelector(".divide").addEventListener("click", function() {
    document.querySelector("#input").textContent += "/";
});

document.querySelector(".multiply").addEventListener("click", function() {
    document.querySelector("#input").textContent += "*";
});

document.querySelector(".subtract").addEventListener("click", function() {
    document.querySelector("#input").textContent += "-";
});

document.querySelector(".add").addEventListener("click", function() {
    document.querySelector("#input").textContent += "+";
});
//////////////////////////////////

document.querySelector(".dot").addEventListener("click", function() {
    document.querySelector("#input").textContent += ".";
});

document.querySelector(".clear").addEventListener("click", function() {
    document.querySelector("#input").textContent = "";
});

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
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
