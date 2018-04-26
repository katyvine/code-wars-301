function high(x){
  let words = x.split(' ').reduce((a,b) => {
    let scoreA=0, scoreB=0;
    for (let i = 0; i<a.length; i++){
      scoreA += a.charCodeAt(i)-96;
      }
    for (let k = 0; k<b.length; k++){
      scoreB += b.charCodeAt(k)-96;
      }
    if (scoreA > scoreB){
    return a;
    }
    return b;
    });
    return words;
  }