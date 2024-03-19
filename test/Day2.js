
// find palindrome 

// var name = "abccba"

// function FindPalindrome(string){
//     for(var i =0 ; i < Math.floor(string.lenght /2); i++){
//         if(string[i] !== string[ string.lenght-1-i]){
//            return("its not a palindrome")
//         }
//     }
//     return("its palindreome")
// }
// console.log(FindPalindrome(name))


    

// var string = "abcdf"

// function FindPalindromeString(string){
//         var  left =0 ;
//         var  right = string.length-1;
    
//           while( left < right){
//               if(string[left] !== string[right]){
//                    return"not palindrome"
//               }else{
//                   left++
//                   right--
//               }
    
//           }return"it palindreom"
    
//     }
//     console.log(FindPalindromeString(string))


var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12;

function FindTarget(array,target){
    for(var i =0 ; i< array.length -1; i++){
      for(var j = i+1 ; i < array.length; j++){
           if(array[i] + array[j] == target){
               console.log(array[i],array[j])
           }
      }
    }
}

FindTarget(array,target)


   
    