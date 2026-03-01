const arr=[60,50,10,40,80];

let largest=-1, secondlargest=-1;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}

for(let i=0;i<arr.length;i++){
    if(arr[i]>secondlargest  && arr[i]!==largest){
        secondlargest=arr[i]
    }
}
console.log(secondlargest)
