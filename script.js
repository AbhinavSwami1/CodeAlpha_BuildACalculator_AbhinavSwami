
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('output').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    var output = document.getElementById('output');
    try {
        output.value = eval(display.value);
    } catch (error) {
        output.value = 'Error';
    }
}

function memoryStore() {
    var display = document.getElementById('display');
    localStorage.setItem('memory', display.value);
}

function memoryRecall() {
    var memory = localStorage.getItem('memory');
    if (memory !== null) {
        document.getElementById('display').value += memory;
    }
}

function clearMemory() {
    localStorage.removeItem('memory');
}

function memoryAdd() {
    var memory = localStorage.getItem('memory');
    var display = document.getElementById('display');
    if (memory !== null) {
        localStorage.setItem('memory', eval(memory + '+' + display.value));
    } else {
        localStorage.setItem('memory', display.value);
    }
}

function trigFunction(func) {
    var display = document.getElementById('display');
    var result;
    switch (func) {
        case 'sin':
            result = Math.sin(eval(display.value));
            break;
        case 'cos':
            result = Math.cos(eval(display.value));
            break;
        case 'tan':
            result = Math.tan(eval(display.value));
            break;
    }
    display.value = result.toFixed(6);
}

function logFunction() {
    var display = document.getElementById('display');
    var result = Math.log10(eval(display.value));
    display.value = result.toFixed(6);
}

function sqrtFunction() {
    var display = document.getElementById('display');
    var result = Math.sqrt(eval(display.value));
    display.value = result.toFixed(6);
}
