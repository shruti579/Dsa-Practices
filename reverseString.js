function reverseString(str) {
    let str1=str.split(" ");
   // console.log(typeof(str1))
  
  let reversed = "";

  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i] + " ";
  }
console.log(typeof(reversed))
  return reversed;
}

console.log(reverseString("hello tyu")); // olleh



