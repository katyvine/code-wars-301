function formatWords(words){
  if (words === null){
  return '';
  }
  
  for (i in words){
    while (words[i] === ''){
      words.splice([i],1);
    }
  }
  
  if (words.length===1){
    return words.toString();
  }
  
  else if (words.length === 2){
    let lastWord = words.pop();
    return words.toString() +' and ' + lastWord;
  }
    
   else if (words.length > 2){
      let lastWord = words.pop();
      let firstWords = words.join(', ');
      let str = firstWords + ' and ' + lastWord
     return str;
    }
    else return "";
  }