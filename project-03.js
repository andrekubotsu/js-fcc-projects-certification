//===================================================================
// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
//===================================================================

/* convert to ASCII code, sum, and convert to letters again */

function rot13(str) {
  let codesArr = [];
  
  
  // convert all the letters to ASCII number
  for (let i = 0; i < str.length; i++){
    codesArr.push(str[i].charCodeAt());
  }
  
  // ROT13 - sum 13 to the codes between 65 and 90 (uppercase letters)
  // all other characteres are numbers different than the interval (65 - 90), just skip
  // also get back to letters
  
  for (let j = 0; j < codesArr.length; j++){ 
    if (65 <= codesArr[j] && codesArr[j] <= 77){
      codesArr[j] = codesArr[j]+13;
    } else if (78 <= codesArr[j] && codesArr[j] <= 90){
      codesArr[j] = codesArr[j]-13;
    }
    codesArr[j] = String.fromCharCode(codesArr[j])
  }

  // join again
  let result = codesArr.join('')
  return result;
}

rot13("SERR YBIR?");
