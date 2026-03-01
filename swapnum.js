let a=30;
let b=20;
let temp;


temp=a;
a=b;
b=temp;

console.log(a,b);

//without third variable

console.log([a,b]=[b,a])
