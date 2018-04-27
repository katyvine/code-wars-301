function mutateMyStrings(stringOne, stringTwo){
  var newStr = stringOne + "\n";
  var arrOne = stringOne.split(''); 
  var arrTwo = stringTwo.split(''); 
  for (var i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i]
      newStr += (arrOne.join('') + "\n")
    }
  }
  return newStr;
}