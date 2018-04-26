function cubeOdd(arr) {
  for (var i in arr){
    if (typeof arr[i] === 'string'){
    return undefined}
   }

    let cubed = arr.map(x => Math.pow(x,3))
    let filter = cubed.filter(z => (z %2===1 || z %2 ===-1))
     if (filter.length<1){
    return 0;}
    let total = filter.reduce((acc, cv) => acc + cv)
    
    return total ;
