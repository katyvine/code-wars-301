function capitalize(s){
  var upperCase = '';
  var lowerCase = '';
  for (var i in s) {
    if (i%2 === 1){
      upperCase += (s[i].toUpperCase());
      }
    else {
      upperCase += (s[i].toLowerCase())
      }
    i++
    }
 
  for (var i in s) {
    if (i%2 === 0){
      lowerCase += (s[i].toUpperCase());
      }
    else {
      lowerCase += (s[i].toLowerCase())
      }
    i++
    }
return [lowerCase, upperCase];
  }