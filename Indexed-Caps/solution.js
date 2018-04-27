var capitalize = function(string, array) {
  var stringArray = string.split('');
  for (i = 0; i < array.length; i++) {
    if (array[i] > stringArray.length) {
      continue;
    }
    var indexString = '' + stringArray[array[i]]
    stringArray.splice(array[i], 1, indexString.toUpperCase())
  }
  return stringArray.join('');
}
