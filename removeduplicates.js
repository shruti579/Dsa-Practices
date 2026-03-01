const arr=[1,2,3,3,3,4,5,5,'a','b','b',-1,-1];
const Newarr=[]

for(let i=0;i<arr.length;i++){
    if(!Newarr.includes(arr[i])){
        Newarr.push(arr[i]);
    }
}
console.log(Newarr);
