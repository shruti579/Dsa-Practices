//1 find largest element in array

function largestNumber(arr){

let largest=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}

    return largest
}
console.log(largestNumber([10,30,70,90,20]));
console.log(largestNumber([10,30,70,90,-20]));
console.log(largestNumber([-10,-30,-70,-90,-20]));



//2 with validations

function largestNumber(arr) {
  // filter only numbers
  const nums = arr.filter((item) => typeof item === "number");

  //   console.log(nums)//[]

  if (nums.length === 0) {
    return null; // or undefined if no numbers
  }

  // find max
  return Math.max(...nums);
}

// Examples
console.log(largestNumber([1, 5, 3])); // 5
console.log(largestNumber([10, "a", 7])); // 10
console.log(largestNumber(["a", "b"])); // null
console.log(largestNumber([0, -5, "x"])); // 0
