function combinedFunction(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    let number;
    if (i.toString().includes("3")) {
      number = "won't you be my neighbor?";
    } else if (i.toString().includes("2")) {
      number = "boop";
    } else if (i.toString().includes("1")) {
      number = "Beep";
    } else {
      number = i;
    }
    result.push(number);
  }
  return result;
}

document.getElementById("calculate-button").addEventListener("click", calculate);

function calculate() {
  let value = parseInt(document.getElementById("input-value").value);
  let result = combinedFunction(value);
  let outputList = document.getElementById("output-list");
  outputList.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = result[i];
    outputList.appendChild(listItem);
  }
}


