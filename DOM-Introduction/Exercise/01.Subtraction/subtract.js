function subtract() {
    let firstElementVal = document.getElementById('firstNumber').value;
    let secondElementVal = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstElementVal) - Number(secondElementVal);
}