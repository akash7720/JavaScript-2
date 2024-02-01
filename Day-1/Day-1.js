// string 

//   "",'', ``

console.log("Akash")      //Akash
console.log('Akash')
console.log(`Akash`,(typeof(`Akash`)))    // Akash  String
console.log(typeof("Akash"))
console.log('121324',(typeof('121324')))     // string
console.log(typeof(`true`))


// Number

console.log(121324,(typeof(121324)))   //number
console.log("121324",(typeof("121324")))   // string
console.log(2+2,(typeof(2+2)))              //4
console.log('1+1',(typeof('1+1')))           // string



// Boolean

console.log(true,(typeof(true)))   //boolean
console.log(false,(typeof(false)))    // boolean
console.log("true",(typeof("true")))   //string


// Varibles
// it is store data 

// three types of varibles
// 1- var     hosting is posible in only var 
// 2- const
// 3- let

// syntax of var

var anyName = 'Akash'   // it is store the value  Akash , 20 

var myage = 20;

var isOpen = true

console.log(anyName,myage, isOpen )   // Akash,20,true

var Value1 = 30;
var Value2 = 20;

console.log(Value1 + Value2)
console.log(Value1 - Value2)
console.log(Value1 * Value2)
console.log(Value1 / Value2)


var myValue = 10;
// console.log(myValue)    //10

myValue = 20;               // re-assign value  (*it is posible for var )
// console.log(myValue)       //20

myValue = myValue + 10      

// console.log(myValue)    //20+10= 30

var myValue = 50;         //re-declare is posible (*it is posible for var )
console.log(myValue)




//const  

//  *=do no possible re-assign or re-declare values.

const kuthbhi = 1234;

// kuthbhi = 56; 
// const kuthbhi = 23244;
console.log(kuthbhi)




//let 

// (only re-assign is posible)

let kahipn = 233;
kahipn = 444;          // re-assign is posible
// let kahipn = 542;    //re-declare is not posible in let 

console.log(kahipn)

