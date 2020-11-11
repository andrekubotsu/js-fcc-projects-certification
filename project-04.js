//===============================================================================
// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
//===============================================================================

// it´s not that difficult (the function itself), the real problem is to implement the RegEx correctly
// it needs to validate these accepted format numbers below:

/* 555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555 */
  
// I do recognize that I need to understand RegEx better (below, not my implementation - sry) - to remember https://regex101.com/

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
