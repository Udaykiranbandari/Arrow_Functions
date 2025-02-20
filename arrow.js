//TASK-1//

var processnumbers = (a,b,callback) => callback(a,b);

var res =  processnumbers(3,4,(x , y) =>  (x+y))
     
console.log("sum:",res)



// //TASK-2//

var  greet = (callback) => callback ("alice!")

var res = greet ((name)=> "hello " +""+ name)

console.log(res)

// //TASK-3//

var calculate = (num5,num6,callback) => callback(num5,num6);

var result = calculate (10,5, (num5,num6) => (num5-num6))

console.log("difference:",result)
  

// ARROW FUNCTIONS//

// 1//
var add = function(a,b){
    return a + b;
} 
console.log ( add(3,4))
//  traditional function

var add = (a,b) => a+b;
console.log(add(4,5))

// arrow function

// 2//
var hello = (a,b) =>a+b;
console.log(hello(3,4))

// 3//
const square = n => n*n;
console.log(square(5))

// 4//

// multiple_parameters:(a,b) => a+b
// No parameters: () => "hello world"

// 5//
var cube = n => n**3;
console.log(cube(6));
// concise body (implicit return)

var cube2 =n => {
    return n**3;
}
console.log(cube2(5))
// block ReportBody(explicit return)

// 6//
var subtract = (a,b) =>a-b;
console.log(subtract(33-22))
// 7//

const hello =() => "hello world";
 console.log(hello());