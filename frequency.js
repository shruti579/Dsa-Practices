//count frequency str='aashish Singla'

function freq(str) {
  let str1 = str.toLowerCase();
  //  console.log(str)
  str1 = str1.split("");

  withoutSpace = str1.filter((item) => (item != ' '))
  console.log(withoutSpace)

  let freq = {};
  for (let item of withoutSpace) {
    freq[item] = (freq[item] || 0) + 1;
  }


  return freq
}
console.log(freq('   aashish Singla '))




