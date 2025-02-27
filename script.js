let display = document.getElementById('display');
let historyDisplay = document.getElementById('history-display');
let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (currentInput === '' || previousInput === '' || !operation) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }
    
    const calculation = `${previousInput} ${operation} ${currentInput} = ${result}`;
    historyDisplay.textContent = calculation;
    
    currentInput = result.toString();
    previousInput = '';
    operation = null;
    display.value = currentInput;
}

function updateHistoryDisplay() {
    historyDisplay.innerHTML = calculations.join('<br>');
    historyDisplay.scrollTop = historyDisplay.scrollHeight;
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operation = null;
    historyDisplay.textContent = '';
    updateDisplay();
}

function clearEntry() {
    currentInput = '';
    updateDisplay();
}

function deleteNumber() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentInput || '0';
    
    if (previousInput !== '') {
        let ongoing = `${previousInput} ${operation} ${currentInput}`;
        historyDisplay.textContent = ongoing;
    } else {
        historyDisplay.textContent = currentInput;
    }
} 