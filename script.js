

let displayValue = '0';
let equationNumber = 1;
let lastResult = 0;
const buttons = document.querySelectorAll('button');
let equation = {
    firstOperand: [],
    operator: null,
    secondOperand: [],
};
let secondEquation = {
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
                if (equationNumber == 1) {
                    if (equation.firstOperand != null && equation.operator != null && equation.secondOperand != null) {
                        calculate(equation);
                    }
                }
                else if (equationNumber > 1) {
                    if (secondEquation.operator != null && secondEquation.secondOperand != null) {
                        calculate(secondEquation);
                    }
                }
            } else if (buttons[i].classList.contains('clear')) {
                clear();
                equationNumber = 1;
            }
        }
        )
    }
}

clickButton();

addToEquation = (value) => {
    if (equationNumber == 1) {
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
    else {
        if (value >= 0 && value <= 9 && secondEquation.operator) {
            secondEquation.secondOperand.push(value);
        }
        else if (value == '+' || value == '-' || value == '*' || value == '/') {
            secondEquation.operator = value;
        }

    }
}



calculate = (equation) => {
    if (equation.operator == '+') {
        if (equationNumber == 1) {
            lastResult = add(equation.firstOperand.join(''), equation.secondOperand.join(''))
        }
        else if (equationNumber > 1) {
            lastResult = add(lastResult, secondEquation.secondOperand.join(''));
            secondEquation.secondOperand = [];
        }
        secondEquation.firstOperand = lastResult;
        updateDisplay(lastResult);

    }
    else if (equation.operator == '-') {
        if (equationNumber == 1) {
            lastResult = subtract(equation.firstOperand.join(''), equation.secondOperand.join(''))
        }
        else if (equationNumber > 1) {
            lastResult = subtract(lastResult, secondEquation.secondOperand.join(''));
            secondEquation.secondOperand = [];
        }
        secondEquation.firstOperand = lastResult;
        updateDisplay(lastResult);

    }
    else if (equation.operator == '*') {
        if (equationNumber == 1) {
            lastResult = multiply(equation.firstOperand.join(''), equation.secondOperand.join(''))
        }
        else if (equationNumber > 1) {
            lastResult = multiply(lastResult, secondEquation.secondOperand.join(''));
            secondEquation.secondOperand = [];
        }
        secondEquation.firstOperand = lastResult;
        updateDisplay(lastResult);

    }
    else if (equation.operator == '/') {
        if (equationNumber == 1) {
            lastResult = divide(equation.firstOperand.join(''), equation.secondOperand.join(''))
        }
        else if (equationNumber > 1) {
            lastResult = divide(lastResult, secondEquation.secondOperand.join(''));
            secondEquation.secondOperand = [];
        }
        secondEquation.firstOperand = lastResult;
        updateDisplay(lastResult);

    }
    equationNumber++;
}

clear = () => {
    equation = {
        firstOperand: [],
        operator: null,
        secondOperand: [],
    };
    secondEquation = {
        firstOperand: [],
        operator: null,
        secondOperand: [],
    };
    equationNumber = 1;
};


