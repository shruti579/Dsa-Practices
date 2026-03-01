function vowelscount(str){
let str2=str.toLowerCase();

let vowels="aeiou"
let count=0
for(let i=0;i<str2.length;i++){
    if(vowels.includes(str2[i])){
        console.log(vowels.includes(str2[i]))
        console.log(str2[i]);
        
        count++
    }
}



    return count;
}
console.log(vowelscount("strinagUu oi"))