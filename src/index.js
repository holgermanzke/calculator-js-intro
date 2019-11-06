"use strict";

import { sum, sub, multi, div, countDigits } from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const result = document.querySelector("#result");
const operator = document.querySelector(".operator");
const substractionButton = document.querySelector(".substraction");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");

sumButton.addEventListener("click", function() {
  // const sum = parseInt(firstInput.value) + parseInt(secondInput.value);
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sum(firstNumber, secondNumber);
});

substractionButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sub(firstNumber, secondNumber);
  operator.innerHTML = "-";
});

multiplyButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = multi(firstNumber, secondNumber);
  operator.innerHTML = "x";
});

divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = div(firstNumber, secondNumber);
  operator.innerHTML = ":";
});
