"use strict";

import { sum, sub, multi, div, countDigits } from "./lib/operators";
import { createDivWithContent, appendElementToElement } from "./lib/elements";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const result = document.querySelector("#result");
const furtherResult = document.querySelector(".further-result");
const operator = document.querySelector("#operator");
const substractionButton = document.querySelector(".substraction");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const digits = document.querySelector("#digits");
// const counterButton = document.querySelector(".counter");

function handleClick(operatorSign, operatorFunction) {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  let childResult = operatorFunction(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(furtherResult, childResult);
  result.innerHTML = sum(firstNumber, secondNumber);
  digits.innerHTML = countDigits(operatorFunction(firstNumber, secondNumber));
  operator.innerHTML = operatorSign;
}

sumButton.addEventListener("click", function() {
  handleClick("+", sum);
});

substractionButton.addEventListener("click", function() {
  handleClick("-", sub);
});

multiplyButton.addEventListener("click", function() {
  handleClick("x", multi);
});

divideButton.addEventListener("click", function() {
  handleClick("/", div);
});
