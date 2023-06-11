README

by Darlene Duyn 

Here's a website that is designed to return specific predefined words and phrases in place of numerical values."

-Technologies Used-

HTML
CSS
VS code
Javascript 

[gh-pages](https://darlene503.github.io/roboger/)

-Description-

This application utilizes javascript and html to create a emersive number generator that will replace 1 with "boop", 2 with "beep", and 3 with "won't you be my neighbor?". When you enter a number into the text box and click "calculate" it will return any numercial value with a string that replaces any number with 3 as "won't you be my neighbor?" 



-TESTS-
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

Test: "It should return "won't you be my neighbor for every number containing 3."
Code: function combinedFunction(value) {
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
combinedFunction(13)
expected outcome: [0, 1, 2, "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "won't you be my neighbor?"]

Test: "It should return "Boop" for every number containing 2. 
Code: function combinedFunction(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    let number;
    if (i.toString().includes("3")) {
      number = "won't you be my neighbor?";
    } else if (i.toString().includes("2")) {
      number = "boop?";
    } else {
      number = i;
    }
    result.push(number);
  }
  return result;
}
combinedFunction(13)
expected outcome: [0, 1, 'boop?', "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 'boop?', "won't you be my neighbor?"]

Test: "It should return "Beep" for every number containing 1. 
Code: function combinedFunction(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    let number;
    if (i.toString().includes("3")) {
      number = "won't you be my neighbor?";
    } else if (i.toString().includes("2")) {
      number = "boop?";
      } else if (i.toString().includes("1")) {
      number = "Beep";
    } else {
      number = i;
    }
    result.push(number);
  }
  return result;
}
combinedFunction(11)
expected outcome: [0, 'Beep', 'boop', "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep']


-Setup/Installation Requirements-

-Clone the repository or download the code files-
-Enter url into the browser of your choice-
-Once webpage has loaded enter a numeric value into blank bloxes-
-Click "Calculate"-
-See results-

-Known Bugs-
No known bugs at this time

-License-

[MIT License](https://choosealicense.com/licenses/mit/)
Copyright (c) 6/2023 Darlene Duyn
