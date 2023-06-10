function combinedFunction(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    let number;
    if (i === 1) {
      number = "beep";
    } else if (i === 2) {
      number = "boop"; 
    }  else if (i === 3) {
      number = "Won't you be my neighbor?";
    } else {
      number = i;
    }
    result.push(number);
  }
  return result;
}
