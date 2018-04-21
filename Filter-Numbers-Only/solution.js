function filter_list(l) {
  let numsOnly = l.filter( l => {
    return (typeof l ==="number")});
  return numsOnly;
}
