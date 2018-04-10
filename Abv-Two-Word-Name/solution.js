function abbrevName(name){
  let initials = name.match(/\b(\w)/g).join('.');
  
  return initials.toUpperCase();
  }