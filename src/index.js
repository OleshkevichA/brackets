
module.exports = function check(str, bracketsConfig) {
  let a = str;
  let b = bracketsConfig;
  let result = b.map( elem => elem.reduce( (q, w) => q + w));

  for (let i = 0; i < str.length; i++){
    result.map( elem => a = a.replace(elem, ''));
 }
  if (a.length == 0){
    return true;
  }
  else {
    return false;
  }
}
