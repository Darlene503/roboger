function oneReturnBeep(number) {
  if (number === 1) {
    return "beep";
  } else if (number === 2) {
    return "boop"; 
  }  else if (number === 3) {
    return "Won't you be my neighbor?"
  }
}
function createArray(value) {
  let numberArray = [];
  for (let i = 0; i <= value; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

