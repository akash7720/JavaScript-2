// Q addition of array target 1+2+3+4+5= 15
// var num = [1,2,3,4,5]

// var addition = 0;

// for(var i = 0 ; i < num.length; i ++){
//       if(addition += num [i]){

//       }
// }
// console.log(addition)


// Q factorial of positive integer 

// var num =7
// var fac =1

// for(num ; num >= 1; num --){
//     fac = fac * num;
//     console.log(fac) 
// }


//Q find th starting and ending position of a given target value 
      //  num = [5,7,7,8,8,10 ]
      //  target = 8   // output is 3 4

      // var num =[5,7,7,8,8,10 ]

      // for( var i=0; i<num.length ; i++){
      //     if (num [i] == 8){
      //       console.log(i)

      //     } 

      // }
     


      var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
      var target = 12;

      function FindTargetedValue(array,target){
           for(var i = 0 ; i < array.length -1; i ++){
              for(var j = i + 1 ; i< array.length; j++){
               //console.log(array[i] ,array[j])
               if(array[i] + array[j] == target){
                  console.log(array[i] , array[j])
               }
              
              }
           }
         }
      FindTargetedValue(array,target)
      