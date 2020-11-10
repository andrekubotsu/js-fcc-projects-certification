//============================================================================
// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
//============================================================================

// comments: the hints given on help!

var convertToRoman = function(num) {
  
  // Hint 1: Creating two arrays, one with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.
  // Hint 2: If you add the numbers to the arrays that go before the new letter is introduced, like values for 4, 9, and 40, it will save you plenty of code.
  // Hint 3: You can’t have more than three consecutive Roman numerals together.
  
  var decimalValue = [1000, 900, 500, 400, 100,  90,  50,  40,   10,   9,  5,  4,    1];
  var romanNumeral = ["M", "CM", "D", "CD", "C","XC", "L", "XL", "X","IX","V","IV", "I"];

  var romanized = "";

  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i]; //add Roman
      num -= decimalValue[i]; //decrease num by the decimal equivalent
    }
  }

  return romanized;
};

// test here
convertToRoman(36);
