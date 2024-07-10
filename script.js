function appendToDisplay(value) {
    const inputField = document.getElementById('input');
    currentValue = inputField.value;
    const lastChar = ['/', '*', '-', '+', '%'].includes(currentValue.slice(-1));
    const newValueIsOperator = ['+', '-', '*', '/'].includes(value);
    if (value !== '' && !(lastChar && newValueIsOperator)) {
        inputField.value += value;
    }
}

function backspace() {
    const inputField = document.getElementById('input');
    currentValue = inputField.value;
    inputField.value = currentValue.slice(0, -1)
}

function calculate() {
    try {
        const result = eval(document.getElementById('input').value)
        if (!isNaN(result)) {
            document.getElementById('input').value = result;
        }
        else {
            document.getElementById('input').value = "Error"
        }
    }
    catch (error) {
        document.getElementById('input').value = "Error"
    }

}


function clearInput(){
    document.getElementById("input").value = ""
}


