const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const substractBtn = document.getElementById("btn-substract");
const multiplyBtn = document.getElementById("btn-multiply");
const devideBtn = document.getElementById("btn-devide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
