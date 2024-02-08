
//neasted fro loop

var array=[1,2,4,56,7,8,3,2,5,7];
var target = 12 ;

function findTarget (array,target){
       for(i=0; i<=array.length; i++){
  
        for(var j=i+1; j<=array.length-1;j++){
            if( array[i]+array[j]==target){
                 console.log(array[i],array[j])
            }
        }
       }
}
findTarget (array,target)




