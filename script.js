

let displayValue = '0';
const buttons = document.querySelectorAll('button');
let equation = {
    firstOperand: [],
    operator: null,
    secondOperand: [],
};

const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
};

const subtract = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
};

const multiply = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
};

const divide = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
};

const opperate = (num1, num2, operator) => {
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return subtract(num1, num2);
    }
    if (operator == '*') {
        return multiply(num1, num2);
    }
    if (operator == '/') {
        return divide(num1, num2);
    }
}

function updateDisplay(num) {
    const display = document.getElementById('display');

    display.innerText = num;

}

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if (buttons[i].classList.contains('operand')) {
                console.log(buttons[i].value);
                addToEquation(buttons[i].value);
                updateDisplay(buttons[i].value);
            } else if (buttons[i].classList.contains('operator')) {
                console.log(buttons[i].value);
                addToEquation(buttons[i].value);
                updateDisplay(buttons[i].value);
            } else if (buttons[i].classList.contains('equals')) {
                if (equation.firstOperand != null && equation.operator != null && equation.secondOperand != null) {
                    calculate(equation);
                }
            } else if (buttons[i].classList.contains('clear'))
                clear();
                
        }
        )
    }
}

clickButton();

addToEquation = (value) => {
    if (value >= 0 && value <= 9 && !equation.operator) {
        equation.firstOperand.push(value);
    }
    else if (value >= 0 && value <= 9 && equation.operator) {
        equation.secondOperand.push(value);
    }
    else if (value == '+' || value == '-' || value == '*' || value == '/') {
        equation.operator = value;
    }

}

calculate = (equation) => {
    if (equation.operator == '+') {
        updateDisplay(add(equation.firstOperand.join(''), equation.secondOperand.join('')))
    }
    else if (equation.operator == '-') {
        updateDisplay(subtract(equation.firstOperand.join(''), equation.secondOperand.join('')))
    }
    else if (equation.operator == '*') {
        updateDisplay(multiply(equation.firstOperand.join(''), equation.secondOperand.join('')))
    }
    else if (equation.operator == '/') {
        updateDisplay(divide(equation.firstOperand.join(''), equation.secondOperand.join('')))
    }
}

clear = () => {
    equation = {
        firstOperand: [],
        operator: null,
        secondOperand: [],
    };
};


