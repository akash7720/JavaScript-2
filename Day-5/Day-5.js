
// var num =[ 1,2,3,4,5]

// var addition = 0;
// for (let i = 0; i < num.length; i++) {
//     addition += num[i];
// }
// console.log(addition);


// undefined 
// Array  
// function



// function login() {
//     console.log("Hi from function")
// }
// login();



// Q Find addition of odd numbers from given Range. 

// function addition(value1, value2) {
//     var count = 0;
//     for (var i = value1; i <= value2; i++) {
//         if (i % 2 == 1) {
//             count += i
//         }
//     }
//     // console.log(count)
//     return count;
// }

// const answer = addition(34, 38);
// console.log(answer)




// Q  10 * 9 * 8 * 7 * . . . . * 1 =  10 



// function Fact(value) {
//     if (value <= 0) {
//         return 1;
//     }
//     var ans
//     for (var i = 1; i <= value; i++) {
//         if (ans == undefined) {
//             ans = i
//         } else {
//             ans *= i
//         }
//     }
//     return ans;
// }

// var result = Fact(5)
// console.log(result, "result")


function fact (value){
    var ans = 1
    for(var i =value ; i >= 1; i--){
            ans *= i     
    }
    return ans;
}
var result = fact(5)
console.log(result)


// Array - Object 4

// var myname = "awdiz"

// var studentss = ["atharvb", "anchal", "kurshna", 12, true, myname, [1, 2, 3, true, "hi"]]

// console.log(studentss, "students")

// var students = ['virat', "rohit", "rahul"];

// console.log(students.length)
// console.log(students[2])
// console.log(students[students.length - 1])
// console.log(students, "students")
// students.push("awdiz")
// console.log(students, "students")


// for (var i = 0; i < students.length; i++) {
//     if (students[i] == "rohit") {
//         console.log(i + 1)
//     }
// }



// var myname  ;
// if(myname == undefined){
//     myname = "awdiz"
//     console.log(myname)
// } else {
//     console.log("Myname is defied.")
// }
// console.log(myname, typeof(myname))




// // for (var i = 0; i < 10; i++) {
// //     for (var j = 0; j < 10; j++) {
// //     }
// // }