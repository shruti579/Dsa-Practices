const str=' a mango  is sweet   ';
const str1=str.split(' ')
console.log(str1);


withoutspace=str1.filter((item)=>(item!=""))
console.log(withoutspace)
words= withoutspace.length
console.log(words)
