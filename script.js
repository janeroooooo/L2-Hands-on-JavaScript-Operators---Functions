function addNumbers(a, b) {
    return a + b;
}

function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
        document.getElementById('result').classList.add('show');
        return;
    }

    let sum = addNumbers(num1, num2);

    document.getElementById('result').innerText = `The sum is: ${sum}`;
    document.getElementById('result').classList.add('show');
}