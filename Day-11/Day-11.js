// at split join concat includes sort , template literals


//we are taking it from frontend, <input type="text" />
var name = "Awdiz";
var age = 10;


console.log("Welcome", name)
console.log(`Welcome ${name} and your age ${age}`) //template literals



var array1 = [1, 2, 3]
var array2 = [4, 5, 6]

const newArray = array1.concat(array2);
console.log(newArray)

var array = [1, 2, 3]
const inArray = array.includes(5);
console.log(inArray)

var array = ["cat", "dog"]
const isExist = array.includes("cat");
console.log(isExist)


var days = ["mon", "tb", "tz", "wed", "sat"];
console.log(days.sort())

var numbers = [1, 5, 200, 3, 2, 4]
console.log(numbers.sort())

var numbers = [1, 5, 200, 3, 2, 4]
console.log(numbers.sort((a, b) => a - b))

console.log(numbers.sort((a, b) => b - a))

var data = ["abc", "xyz", 'lmn']

console.log(data.join("-"))
console.log(data.join(" ")) 
console.log(data.join(""))
console.log(data.join())


var string = "Awdiz Institute Vashi"
console.log(string.split(" "))

var nums = [1, 2, 3, 4]
console.log(nums.at(0))
console.log(nums.at(3))
console.log(nums.at(4))