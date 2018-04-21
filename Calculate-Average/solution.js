function find_average(array) {
 
  let avg = (array.reduce((accumulator, value) => (
  accumulator + value)))/array.length

  return avg;
}