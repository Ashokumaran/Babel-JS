array = [1,2,3,4,5];

console.log("------------------Example 1------------------");
let result = [...array];
console.log(result);
console.log("---------------End----Example 1---------------");


console.log("------------------Example 2------------------");
var fname="Mr.";
var lname="RObot";
console.log(`Hola! ${fname}, ${lname}`);
console.log("---------------End----Example 2---------------");

b = array.indexOf(5);
console.log("IndexOf 5 in given array is",b);


var str = "Hello world!";
var res = str.slice(0, 5);
console.log(res);


console.log("Map Example");
var newArray = array.map((item) => 
{
    return item+1;
}
);
console.log(newArray);

console.log("Reduce Example");
var reduceArray = array.reduce((item,value) => 
{
    return item+value;
}
,0);
console.log(reduceArray);


console.log("Filter Example");
var numbers = [23,43,34,54,65,76,87,8];
const findOdd=numbers.filter((numbers)=>{
    if(numbers%2!=0)
    return numbers;
})
console.log(findOdd);