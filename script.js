let display = document.getElementById('display');
let displayValue = '0';

function inputValue(value) {
    if (displayValue === '0' || display.innerText === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    display.innerText = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    display.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch (e) {
        display.innerText = 'Error';
        displayValue = '';
    }
}
