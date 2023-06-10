Describe: oneReturnBeep()

Test: "It should return the word Beep when 1 is entered."
Code: function oneReturnBeep(number) {
  if (number === 1) {
    return "beep";
oneReturnBeep(1);
Expected Output: "Beep"

Test: "It should return the word Boop when 2 is entered."
Code: function oneReturnBeep(number) {
  if (number === 1) {
    return "beep";
    else if (number === 2) {
    return "boop"; 
oneReturnBeep(2);
Expected Output: "Boop"

Test: "It should return the word Boop when 2 is entered."
Code: function oneReturnBeep(number) {
  if (number === 1) {
    return "beep";
    else if (number === 2) {
    return "boop"; 
    } else if (number === 3) {
    return "Won't you be my neighbor?"
oneReturnBeep(3);
Expected Output: "Won't you be my neighbor?"

Describe: creatArray()

Test: "It should return every number from 0 to the numbered entered"
Code: function createArray(value) {
  let numberArray = [];
  for (let i = 0; i <= value; i++) {
    numberArray.push(i);
  }
  return numberArray;
}
creatArray(5);
Expected Output: (6) [0, 1, 2, 3, 4, 5]

Describe: combinedFunction()

Test: "It should combine the array function with the branch function, and add predetermined word/phrases inside array."
Code: function combinedFunction(value) {
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

combinedFunction(5);
Expected Output: "0, 'beep', 'boop', "Won't you be my neighbor?", 4, 5"
