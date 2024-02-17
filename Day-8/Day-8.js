
// var myObject = { name: 'awdiz', surname: "xyz", age: 20, isOpen: true, students: ["a", 'b'] }

// console.log(myObject,"myObject")
// console.log(myObject.name)
// console.log(myObject.surname)
// console.log(myObject.age)
// console.log(myObject.isOpen)
// console.log(myObject.students)

// Q 1 unique number find

var array =[1,2,1,3,4,5,2,3,5,1];
var myAnswer = {}

 for(var i =0 ;i < array.length;i++){     // find only unique number
     if(myAnswer[array[i]] === undefined) {
        myAnswer[array[i]] = 1
        console.log(array[i])
     }
  }


//Q 
var array =[1,2,1,3,4,5,2,3,5,1];    
var myAnswer = {}
for(var i=0 ;i< array.length;i++){
    if(myAnswer[array[i]] === undefined) {
       myAnswer[array[i]] = 1
     }else{                            
        myAnswer[array[i]]++
    }
}
console.log(myAnswer)






