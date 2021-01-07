// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

window.onload = function() {
  let numRandomNumbers = document.getElementById("num-numbers");
  let randomRangeMin = document.getElementById("num-range-min");
  let randomRangeMax = document.getElementById("num-range-max");
  let generateButton = document.getElementById("gen-btn");
  let outputArea = document.getElementById("output");

  generateButton.addEventListener("click", function (event) {
    let rangeMin = parseInt(randomRangeMin.value);
    let rangeMax = parseInt(randomRangeMax.value);
    let numRand = parseInt(numRandomNumbers.value);

    if (isNaN(rangeMin) || isNaN(rangeMax) || isNaN(numRand)) {
      console.error("Received NaN...");
      return;
    }

    // min can not be greater than max
    if (rangeMin > rangeMax) {
      let temp = rangeMin;
      rangeMin = rangeMax;
      rangeMax = temp;
    }

    let output = [];

    for (let i = 0; i < numRand; ++i) {
      let randomNumber = Math.floor(Math.random() * rangeMax) + rangeMin;
      output.push(randomNumber);
    }

    outputArea.innerText = output.join(" ");
  });
}