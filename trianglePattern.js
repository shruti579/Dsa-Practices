// 1
// 12
// 123
// 1234
// 12345

// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+=j;
//     }
//     console.log(line)
// }



// 1
// 22
// 333
// 4444
// 55555

// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+=i;
//     }
//     console.log(line)
// }



// *
// **
// ***
// ****
// *****

// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line)
// }



// *****
// ****
// ***
// **
// *
// let num=5;
// for(let i=num;i>=1;i--){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line)
// }


//flyodis triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let num=5;
// let count=1;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line  += count + " ";
     
//         count++
//     }
//     console.log(line)
// }




//     1
//    12
//   123
//  1234
// 12345

// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=i;j++){
//         line+=j;
//     }
//     console.log(line)
// }



//     *
//    **
//   ***
//  ****
// *****
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line)
// }


//     *
//    ***
//   *****
//  *******
// *********
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         line+="*";
//     }
//     console.log(line)
// }



//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         line+="*";
//     }
//     console.log(line)
// }
// for(let i=num-1;i>=1;i--){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         line+="*";
//     }
//     console.log(line)
// }



// *****
// *****
// *****
// *****
// *****

// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=num;j++){
//         line+="*"
//     }
//     console.log(line)
// }



// *****
// *   *
// *   *
// *   *
// *****
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=num;j++){
//         if(i===1||i===num||j===1||j===num){
//           line+="*"
//         }
//         else{
//             line+=" "
//         }
       
//     }
//     console.log(line)
// }


//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j===1||j===2*i-1){
//        line+="*";
//         }else{
//             line+=" "
//         }
       
//     }
//     console.log(line)
// }
// for(let i=num-1;i>=1;i--){
//     let line="";

//       for(let s=1;s<=num-i;s++){
//         line+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j===1||j===2*i-1){
//        line+="*";
//         }else{
//             line+=" "
//         }
//     }
//     console.log(line)
// }




// *        *
// **      **
// ***    ***
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// let num=5;
// for(let i=1;i<=num;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     for(let s=1;s<=2*(num-i);s++){
//         line+=" "
//     }
//       for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line)
// }
// for(let i=num-1;i>=1;i--){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     for(let s=1;s<=2*(num-i);s++){
//         line+=" "
//     }
//       for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line)
// }




