//  let a = 15.4;
//  let b = 4.7;
//  const result1 =a%b;
// const result2 =a+b;
// const result3 =a-b;
// const result4 =a*b;
//  const result5 =a/b;
// let a = 0.1;
// let b = 0.2;
// const result6 =a+b
// console.log(result6.toFixed(4))
// let a = "5";
// let b = 3;
// console.log(a == b);
// var a= 15;
// var b= 0;
// console.log(-5);
// console.log(3);
// var x= 5;
// var y= ++x;
// console.log(y);
//  console.assert(x);
// var score= 61;
// var result = score >=60? "pass":"fail";
// console.log(result);
// let a = 10;
// let b = 4;
// console.log("a + b = ", a+b)
// console.log("a-b = ",a-b)
// console.log("a/b = ",a/b)
// console.log("a ** b = ",a**b)
// console.log("a % b = ",a%b)
// console.log("++a= ",++a)
// console.log("a = ", a)
// console.log("a-- = ", a--)
// console.log("--a = ", --a)
// let comp1 = 6;
// let comp2 = 7;
// console.log("comp1==comp2", comp1 == comp2 )
// console.log("comp1==comp2", comp1 != comp2 )
// console.log("comp1==comp2", comp1 === comp2 )

//  const marks = 64;
//  if (marks<40){
//      console.log("fail")
//  }
//  else if(marks>40&&marks<60){
//      console.log("pass by grade B")
// }
// else if (marks>=60&&marks<70){
//      console.log("grade A")
//  }
//  else{
//      console.log("marks.valid")
// }

// for(let i=1; i<10; i++){
//     console.log(i)
// }

// for(let i=1; i<10; i++){
//     if (i !==4){
//         console.log(i)
//         // continue;
//         break;
//     }
// }


// const age = 54

// if (age < 0){
//     console.log ("is a invalid age");
// }
// else if(age >= 1 && age < 18){
//     console.log ("you are a child");
// }
// else if (age >=18 && age < 50){
//     console.log ("you are adult");
// }
// else if(age >= 50&& age < 60){
//     console.log("you are old");
// }
// else {
//     console.log("you are very old");
// }

// const num = 98
// if(num % 2 ===0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd")
// }

// const day="thursday"
// switch (day) {
//     case "sunday":
//         console.log("aaja bida ho");
//         break;

//         case "tuesday":
//             console.log("office day");
//             break;

//             case "wednesday":
//                 console.log("movie day");
//                 break;

//                 case "thursday":
//                     console.log("fishing day");
//                     break;

//             default:
//                 console.log("no condition match");   

//     }


 
// MULTIPLICATION TABLE
//  var num =1;
//  while (num <=10){
//     // console.log("6 * " + num +" = " + 6 * num);
//     console.log(`5*${num}=${5*num}`)
//     num++
//  }

// D0 WHILE LOOP
// var num = 1;
// do{
//     console.log(num);
//     num++;
// }
//     while(num<=10){

//     }




// const age = 13
// if (age>10 && age< 20){
//     console.log("your age lies btn 10 and 20");
// }
// else {
//     console.log("your age lies doesn't btn 10 and 20");
// }

// const num = 12
// if (num % 2==0 && num % 3 ==0){
//     console.log("num is divisible by 2 and 3");
// }
// else{
//     console.log("num is not divisible by 2 and 3");
// }

// const day = "friday"
// switch (day){
//     case "sunday":
//         console.log("today is bday");
//         break;
//         case "monday":
//             console.log("todai is movie day");
//             break;
//             case  "friday":
//                 console.log("today dinner night");
//                 break;

//                 default:
//                     console.log("rest day");

// }


// function

// function addition(){
//     console.log(2+3);
// }
// addition()


// function MULTIPLICATION(a,b){
// // console.log(a*b);
// return a*b;
// }
// let result= MULTIPLICATION(2,3)
// console.log(result);

// arrow function

// var result = function sum (a,b){
//     console.log(a*b);
// }
// result(10,15);
// const sum =()=>{
// console.log("hello");
// }
// sum()

// (function(a,b){
//     console.log(a+b);
// })(5,10)


// const calculator = (num1,num2,operator) => {
//  let result;
//  switch (operator){
//     case "+":
//     return num1+ num2;

//     case "-":
//         result =num1-num2;
//     return result;

//     case "*":
//         result=num1 * num2;
//         return result;
        

//         case "/":
//         if (num2===0){
//             return "0 is not allowed"
//         } else {
//             result =num1 / num2;
//             return result;
//         }
//         default:
//             return "no operator found"
//  }
// };
// const value = calculator(5,3,"/")
// console.log(value);


// var result = function sum (a,b){
//     console.log(a+b);
// }
// result(10,15);
// const sum =()=>{
//     console.log("hello");
// }
// sum()


// ARRAy

// let fruit = ["apple","orange","mango"];
// console.log(fruit[2]);

// let fruit = ["apple","orange","mango"];
// for (let item of fruit){
//     console.log(item);
// }

// let fruit = ["apple","orange","mango"];
// for (let item in fruit){
//     console.log(item);
// }


// let fruit = ["apple","orange","mango","banana"];
// for(let item = 0; item <fruit.length; item++){
//     console.log(fruit[item]);
// }

// let fruit = ["apple","orange","mango","banana"]
// fruit.forEach((element,index,array)=>{
//     console.log(element,index)
// })

// let fruit = ["apple","orange","mango","banana"]
// const a=fruit.map((element,index,array)=>{
//     return element;
// })
   
//     console.log(a);


// let ram = (a,b) => console.log(a,b);
// ram(1,2)

// let oddPrint = () => {
//     for (let i=0; i<=10; i++){
//         if (i%2==1){
//             console.log(`${i} is odd`);
//         }
//     }
// }
// oddPrint()

// let a = prompt ("enter some number")
// let b = Number(a)
// let multiplicationFunction= (num) => {
//     for (let i=0; i<=10; i++){
       
//             console.log(`${num}* ${i} =${num*i} `);
        
//     }
// }
// multiplicationFunction(b)



// let a = prompt ("enter some number")
// let b = Number(a)
// let multiplicationFunction= (num) => {
//     for (let i=0; i<=5; i++){
       
//             console.log(`${i}* ${i} =${i*i} `);
    
//     }
// }
// multiplicationFunction(b)


// let totalSum = 0;
// let totalCubeSum =()=>{
//     for (let i = 0; i<5; i++){
//         let num = prompt("enter a num:")
//         totalSum += num **3
//     }
//     console.log(totalSum);
// }
// totalCubeSum()

// immediately invoke function
// (function(){
// for (i=1; i<10; i++){
//     if (i%2==0){
//         console.log(i, "is even number");
//     }
//  }
// }
// )();



// call back function


// function mainFunction(fun){
//     console.log("this is main function");
//     fun()
// }

// function anotherFunction(){
//     console.log("this ia another functiom");

// }
// mainFunction(anotherFunction)



// return statement

// function returnSomething(){
//     return'something'
// }
// let a= returnSomething()
// console.log(a);


// Higher order function

// function higherFunction(fun){
//     return fun
// }
// function mainFunction(){
//     console.log("This is higher order function");
// }
// let a= higherFunction(mainFunction)
// a()


// Recursive Function

// function fact(n){
//     if(n==1|| n==0){
//         return 1
//     }
//      else{
//         return n*fact(n-1)
//      }

// }
// console.log(fact(6));

// function fib(n){
//     if(n==1){
//         return 0;
//     }
//       else if(n==2){
//         return 1
//       }
//      else{
//         return fib(n-1) + fib(n-2)
//      }

// }
// console.log(fib(8));

// function fib(n){
//     if(n==1 || n==2){
//         return 0,1;
//     }
      
//      else{
//         return fib(n-1) + fib(n-2)
//      }

// }
// console.log(fib(4));



// STRING

// length


// let myName = 'ravi'
// console.log(myName.length);

// method


// let myName = 'ravi is me'
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.split(""));
// console.log(myName.trim());
// console.log(myName.trimStart());
// console.log(myName.trimEnd());
// console.log(myName.replace('me','you'));
// console.log(myName.indexOf('m'));
// console.log(myName.lastIndexOf('e'));
// console.log(myName[2]);
// console.log(myName.concat(' hello ravi'));

// let newString ='hello how'
// console.log(newString.slice(0,4));

// console.log(newString.slice(-1));

// console.log(newString.slice(4));

// console.log(newString.includes('how'));



// let a= 'hello world'
// // for(let i=0; i<a.length; i++){
// //     console.log(a[i]);
// // }

// // for(let i in a){
// //     console.log(a[i]);
// // }

// for(let i of a){
//     console.log(i);
// }



// Document object model (DOM)

// let a = document.getElementById('hello')
 
// // a.style.color= 'red'
// console.log(a.innerText.toUpperCase());

// let a= document.getElementById('display')





