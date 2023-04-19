function insert(num) {
    document.getElementById('result').value += num;
}

//This function clears the result tab.
function clearResult() {
    document.getElementById('result').value = "";
}

// This function is called when the '=' button is clicked. It evaluates the mathematical expression entered in the result input field and displays the result.
function calculate() {
    let input = document.getElementById('result').value;
    let output = eval(input);
    document.getElementById('result').value = output;
}
