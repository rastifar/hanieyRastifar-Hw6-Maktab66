const commonString = function (text1, text2) {
  let commonLetter = [];
  let numOfOccuranceOfLetters = [];

  text1 = text1.toLowerCase().split("");
  text2 = text2.toLowerCase().split("");

  //to find the common letters in both inputs
  for (const key in text1) {
    if (text2.includes(text1[key])) {
      if (!commonLetter.includes(text1[key])) {
        commonLetter.push(text1[key]);
      }
    }
  }
  // to calculate the min occurance of common letters in both inputs
  //   console.log(commonLetter);
  if (commonLetter.length !== 0) {
    for (const key in commonLetter) {
      let num1 = 0;
      let num2 = 0;

      for (const keyText1 in text1) {
        if (commonLetter[key] === text1[keyText1]) {
          num1++;
        }
      }
      for (const keyText2 in text2) {
        if (commonLetter[key] === text2[keyText2]) {
          num2++;
        }
      }
      numOfOccuranceOfLetters.push(num1 < num2 ? num1 : num2);
    }

    print(commonLetter, numOfOccuranceOfLetters);
  } else {
    console.log("nothing in common");
  }
};

//to print the output
function print(commonLetter, numOfOccuranceOfLetters) {
  let sum = numOfOccuranceOfLetters.reduce((a, b) => a + b, 0);
  let str = "Strings have " + sum + " common Charactors";
  for (const key in commonLetter) {
    str +=
      ' " ' + commonLetter[key] + ": " + numOfOccuranceOfLetters[key] + ' ",';
  }
  console.log(str);
}

try {
  commonString("lksnL1KJ2221212", "KLKOnnn121212DLD");
  console.log("-------------------");
  commonString("aabcc", "adcaa");
  console.log("-------------------");
  commonString("l", "K");
} catch (error) {
  console.log(error);
}
