function validateUsr(username) {
  let res = /^[a-z_0-9]{4,16}$/g.test(username) 
  return res
}