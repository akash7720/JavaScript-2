
//Q addition of array target 1+2+3+4+5= 15
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


//Q 1 
//      //const removeElement = function (nums, val) {
      //  function removeElement(nums, val){
      //       let count = 0;
          
      //       for (let i = 0; i < nums.length; i++) {
      //         if (nums[i] !== val) {
      //           nums[count] = nums[i];
      //           count++;
      //         }
      //       }
      //       return count;
      //     };
          
      //     console.log(removeElement([3, 2, 2, 3], 3));
      //     console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
          
    
//Q 2 & 4
      // var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
      // var target = 12;

      // function FindTargetedValue(array,target){
      //      for(var i = 0 ; i < array.length -1; i ++){
      //         for(var j = i + 1 ; i< array.length; j++){
      //          //console.log(array[i] ,array[j])
      //          if(array[i] + array[j] == target){
      //             console.log(array[i] , array[j])
      //          }
              
      //         }
      //      }
      //    }
      // FindTargetedValue(array,target)


//Q3
//       var array =[1,2,3,4,5]
//       let addition = 0

//      for (var i = 0; i < array.length; i++) {
//         addition += array[i];
       
//      }
//     console.log(addition);
      
      
//Q 5 

//   var arr=[1, 2, 3, 4, 5]
  
//   var result = [];
//   function  reverseArray (arr){
//       for (var i = 0; i < arr.length; i++) {
//         result.unshift(arr[i]);
//       }
//       return result;
//     };
//     console.log(reverseArray([1, 2, 3, 4, 5]));
    

// Q find unique number

// var array =[1,2,1,3,4,5,2,3,5,1];
// var myAnswer = {}

//       for(var i =0; i< array.length; i++){
//         if(myAnswer[array[i]]===undefined){
//             myAnswer[array[i]]=1
//            console.log(array[i])
//       }
//     }


//Q find addition two numbers is target
// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12

// function FindTargetNum(array,target){
//     for (var i = 0; i < array.length -1 ; i++) {
//      for (var j= i+1; j < array.length; j++) {
//         if(array[i]+ array[j]== target){
//             console.log(array[i],array[j])
//         }
      
//      }
      
//     }
// }

// FindTargetNum(array,target)



//Q 6 addition of array target 1+2+3+4+5= 15
// var num = [1,2,3,4,5]
// var addition= 0

// for (var i = 0; i < num.length; i++) {
//       if(addition += num[i]){
         
//       } 
      
// }
// console.log(addition)



//Q7 factorial number

// var ans = 1
// var result = fact(5)

// function fact(value){
//       for(var i=value ; i >=1 ; i --){
//          ans*=i
//       }
//       return ans

//     }
//   console.log(result)



//Q 7 
 
// let result = 1;
// function  calculateFactorial(n) {
//       while (n > 1) {
//         result *= n;
//         n--;
//       }
    
//       return result;
//     };
    
//     console.log(calculateFactorial(5));
//     




// Q 9 
// const result = prime(98);

// function prime(n) {
//       if (n <= 1) {
//         return false;
//       }
    
//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//     console.log(result);
//      console.log(prime(97)); //true
//     console.log(prime(98));  //false


//Q 11 

//  function findMissingNumber (nums){
//       nums.push(0);
//       const noDuplicates = [...new Set(nums)];
    
//       const n = noDuplicates.length;
    
//       const expectedSum = (n * (n + 1)) / 2;
//       let actualSum = 0;
    
//       for (let i = 0; i < noDuplicates.length; i++) {
//         actualSum = actualSum + noDuplicates[i];
//       }
    
//       return expectedSum - actualSum;
//     };
    
//     console.log(findMissingNumber([3, 0, 1,]));
//     console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));



// Q 12
// const needleAndHaystack = function (haystack, needle) {
//       if (haystack.includes(needle)) {
//         return haystack.indexOf(needle);
//       } else {
//         return -1;
//       }
//     };
    
//     console.log(needleAndHaystack(`sadbutsad`, "sad"));
//     console.log(needleAndHaystack(`butsad`, "sad"));
//     console.log(needleAndHaystack(`airplane`, "plane"));


//Q 13

//const findTarget = function (nums, target) 

//   function findTarget (nums, target)  {
//       if (nums.includes(target)) {
//         const start = nums.indexOf(target);
//         const last = start + 1;
//         return [start, last];
//       } else {
//         return [-1, -1];
//       }
//     };
    
//     console.log(findTarget([5, 7, 7, 8, 8, 10], 8));
//     console.log(findTarget([1, 3, 5, 6], 5));


    //Q15
   
//     function removeDuplicate(str) {
//       const arr = str.split("");
//       const set = [...new Set(arr)];
    
//       let newStr = "";
//       for (let i = 0; i < set.length; i++) {
//         newStr = newStr + set[i];
//       }
    
//       return newStr;
//     };
    
//     console.log(removeDuplicate(`hello`));
    

//Q4 palindrome

//   var name= "ABCDDCBA"

//  function FindString(string){
//    for( var i=0 ; i< Math.floor(string.length/2); i++){
//       if(string[i] !== string[string.length -1-i]){
//             return("false")
//       }

//    }return("true")

// }
// console.log(FindString(name))


//while loop palindrome  
// var string='abccba'

// function FindPalindrome(string){
//       var left= 0
//       var right = string.length-1
//      while(left<right){
//       if(string[left]!==string[right]){
//           return'not a palindrome'
//       }else{
//             left++
//             right--
//            }
//      }return'its palindrome'
// }
// console.log(FindPalindrome(string))



// var string = "Abccba"
// function FindPalindrome(string){
//         var left= 0;
//         var right = string.length-1;
//        while(left<right){
//         if(string[left]!==string[right]){
//             return'not a palindrome'
//         }else{
//               left++
//               right--
//              }
//        }return'its palindrome'
//   }
//   console.log(FindPalindrome(string))
  


//   var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
//   var target = 12;

//    function FindTarget(array,target){
//       for(var i = 0; i < array.length-1; i++){
//             for(var j =i+1 ;i< array.length ; i++){
//                if(array[i] = array[j] == target){
//                    console.log(array[i],array[j])
//                }
//             } 
//       }

//    }
//    FindTarget(array,target)

   


// var name= "abba"

// function findPalindrome(string){
//    for(var i =0; i < Math.floor(string.length/2);i++){
//       if(string[i] !== string[string.length-1-i]){
//              return("its not a palindrome")
//       }
//    }return("its palindreome")
   

// }
// console.log(findPalindrome(name))



      
// var string ="caddac"

// function findPalindrome(string){
//     var  left =0 ;
//     var  right = string.length-1;

//       while( left < right){
//           if(string[left] !== string[right]){
//                return"not palindrome"
//           }else{
//               left++
//               right--
//           }

//       }return"it palindreom"

// }
// console.log(findPalindrome(string))

// var string = "Abccba"









// test day 20 -03


// function isPrime(num) {
//       if (num <= 1) {
//           return false;
//       }
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//           if (num % i === 0) {
//               return false;
//           }
//       }
//       return true;
//   }
  
//   function printPrimes() {
//       for (let i = 1; i <= 100; i++) {
//           if (isPrime(i)) {
//               console.log(i);
//           }
//       }
//   }
  
//   printPrimes();
  
  

  
  

//  for (var i = 0; i < 3; i++) {
//             var stars = ' '; 
            
//             for (var j = 3; j > i; j--) {
//                 stars += ' ';
//             }
//             for (let k = 0; k <= i; k++) {
//                   stars += '*'
                  
//             }
//             for(let t = 2; t>i; t--){
//                   stars+= ' '
//             }
//             for(let y = 4; y<=i; y++){
//                   stars+='* '
//             }
//             for(let f = 1; f>i; f--){
//                   stars+= ' '
//             }
//             // for(let c = 2; c<=i; c++){
//             //       stars+=' '
//             // }
//             // for(let b = 1; b>i; b--){
//             //       stars+= ' '
//             // }
//             // for(let b = 2; b<=i; b++){
//             //       stars+='*'
//             // }
//             console.log(stars);
//         }


// var string ="Hello World"

// function reverseString(string) {
//       let reversedString = '';
//       for (let i = string.length - 1; i >= 0; i--) {
//           reversedString += string[i];
//       }
//       return reversedString;
//   }
  
 
//   console.log(reverseString(string));
  



// var originalString = "hello";

// function removeDuplicates(string){
//     var result = '';
//     var i = 0;
//     while (i < string.length) {
//         var current = string[i];
//         if (result.indexOf(current) === -1) {
//             result += current;
//         }
//         i++;
//     }
//     return result;
// }

// console.log(removeDuplicates(originalString));
  
  


//Q
// let num = 5;

// while (num >= 1) {
//     let space = " ".repeat(5 - num);
//     let sequence = "";
//     for (let i = 1; i <= num; i++) {
//         sequence += i;
//     }
//     console.log(space + sequence);
//     num--;
// }



for (i = 1 ; i <= 100 ; i++)
    console.log(i);
