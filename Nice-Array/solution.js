function isNice(arr){
  if(arr.length === 0){
  
  return false
  }
 
  for (var i=0; i<arr.length; i++){
  
  let isFriendly = false
    for(var j=0; j<arr.length; j++){
    if ((arr[j] === (arr[i]+1)) || (arr[j] ===(arr[i]-1))){
      
    isFriendly = true;
    }      
  }
  if (isFriendly === false){
  
  return false;
  } 
  }
 return true;
}