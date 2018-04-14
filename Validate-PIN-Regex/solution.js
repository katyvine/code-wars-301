function validatePIN (pin) {
  let val = /^(\d{4}|\d{6})$/.test(pin);
  return val;
  }