// Movung All zeros to end

let arr = [0,10,20,30,40,0];
let pos = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[pos], arr[i]] = [arr[i], arr[pos]];
    pos++;
  }
}

console.log(arr);