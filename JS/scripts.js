function combinedFunction(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    let number;
    if (i.toString().includes("3")) {
      number = "won't you be my neighbor?";
    } else {
      number = i;
    }
    result.push(number);
  }
  return result;
}



