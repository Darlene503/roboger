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

