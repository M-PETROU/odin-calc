

    let displayValue = '0';
    const buttons = document.querySelectorAll('button');
    const equation = {
        firstOperand : null,
        operator : null,
        secondOperand : null,
    };

    const add = (num1, num2) => {
        return num1 + num2;
    };

    const subtract = (num1, num2) => {
        return num1 - num2;
    };

    const multiply = (num1, num2) => {
        return num1 * num2;
    };

    const divide = (num1, num2) => {
        return num1 / num2;
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
                    if (equation.firstOperand != null && equation.operator != null && equation.secondOperand != null){
                        calculate(equation);
                    }
                } else if (buttons[i].classList.contains('clear'))
                    //clearDisplay();
                    updateDisplay();
            }
            )
        }
    }

    clickButton();

    addToEquation = (value) => {
        if (value >= 0 && value <=9 && equation.firstOperand == null) {
            equation.firstOperand = value;
        }
        else if (value >= 0 && value <=9 && equation.firstOperand != null) {
            equation.secondOperand = value;
        }
        else if (value == '+' || value == '-' || value == '*' || value == '/' && equation.operator == null) {
            equation.operator = value;
        }

    }

    calculate = (equation) => {
        if (equation.operator == '+')
        {
            updateDisplay(add(equation.firstOperand, equation.secondOperand))
        }
        else if (equation.operator == '-')
        {
            updateDisplay(subtract(equation.firstOperand, equation.secondOperand))
        }
        else if (equation.operator == '*')
        {
            updateDisplay(multiply(equation.firstOperand, equation.secondOperand))
        }
        else if (equation.operator == '/')
        {
            updateDisplay(divide(equation.firstOperand, equation.secondOperand))
        }
    }


