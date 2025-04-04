// a=prompt('enter your name')
// console.log(a);
// alert(a)

// variable
// fullName="xyz"
// _fullName="xyz"
// $fullName="xyz"
// fullName1="xyz"
// console.log(fullName);



// let,var, const

// var a = "rav"
// var a = 'jha'
// console.log(a);

// let x=100
// x =200
// console.log(x);

// const data = 200
// console.log(data);

// lat and const accrss garna mildaina bracket bahira bata bt var le milxa so var is global scope variable

// {
//     let a = 90
//     const b = 80
//     var c = 120
// }
// console.log(c);



// DATA TYPES 
// 1 PRIMITIVE
// >>TYPE- NUMBER,NULL,STRNG,SYMBOL,BOOLEAN,BIGINTEGER,UNDEFINED
// 1) NUMBER
    //   DIGIT HARU HUNXA LIKE 
    // let data=123
    // console.log(typeof data);
    // 2)STRING

// use of ``
// // string vitra arko variable access garna lai
// let data = 123
// let name = `tatal number is ${data}`
// console.log(typeof name);

// 3) BOOLEAN
// IT STORES ONLY TWO VALUE (TRUE OR FALSE)
// let isBool = true
// console.log(isBool);


// 4)SYMBOL

// let id = Symbol("ram")
// console.log(id);


// 5)BIGINT

// DHERAI DIGIT DISPLAY GARNU PARYO VANE

// 6) NULL
// SPACE KHALI RAKH DINXA

// 7) UNDEFINED




// OBJECT DATATYPE
// const person ={
//     name: "ravi",
//     age : 25,
//     address : "gwarko",
// }
// console.log(person.age);


// ARRAY DATATYPES
// collection of item/variables//multiple of data halna milxa
// const arr =[1,"ravi",true]
// console.log(arr[2]);


// Function

// function sum (){
//     console.log('hello world');
//     console.log(2+3);
// }
// sum()

// RETURN
// function sum (a){
//    return a+5
// }
// let x=sum(100)
// console.log(x);


// OPERATORS

// ARITMNETIC OPERATORS
// +,-,*,/,**

// console.log(1+5);
// console.log(1-5);
// console.log(1*5);
// console.log(10/5);
// console.log(2**3);
// console.log(3%2);

// let x = 5
// x++;
// console.log(x);
// let x = 5

// console.log(++x);

// let x = 5
// x--;
// console.log(x);

// let x = 5
// console.log(--x);


// ASSIGNMENT OPERATOR

// let x = 5
// x+=5  x=x+5
// x-=5  x=x-5
// x*=5  x=x*5
// x/=5  x=x/5
// x%=5  x=x%5
// x**=2  x=x**5
// console.log(x);


// COMPARISON OPERATOR
// ==,===,>,<,<=,<=,!=,!==

// let a = 5
// let b = 5
// console.log(a!==b);


// LOGICAL OPERATOR

// (&& ,||)

// && ko condition
// true && true = true
// true && false = false
// false && false = false
// false && true = false

// || ko condition
// true && false = true
// false && true = true
// true && true = true
// false && false = false


// ternary operator

// true? console.log(true) :console.log(false)

// let x = 5;
// let y= 10;
// console.log(x>y && x<y);

// let x = 5;
// let y= 10;
// console.log(x>y || x<y);

// ! 0perator
// let t=true
// console.log(!t);

// true? console.log("true") : console.log("false");

// let x =9
// if (x>10){
//     console.log("hello if");
// }
// else{
//     console.log("hello else");
// }

// let age =18
// if (age>=18){
//     console.log("adult");
// }
// else{
//     console.log("not adult");
// }

// let num = -1
// if (num>0){
//     console.log("positive");
// }
// else{
//     console.log("not positive");
// }


// LOOP


// for(let i=0;i<=10;i++){
//     console.log("ravi");
// }

// SUM OF 1 TO HUNDRED
// let sum =0
// for(let i = 1;i<=100;i++){
//     sum = sum+i
// }
// console.log(sum);


// let count = 0
// let sum = 0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//         count++
//         sum = sum + i
//     }
// }
// console.log(`total even number is ${count}`);
// console.log(sum);


// WHILE LOOP

// while(){
    
// }

// let i = 0
// while (i<10) {
//     console.log(i);
//     i++
// }


// DO WHILE LOOP
// do{}while


// let i = 1
// do{
//     console.log(i);
//     i++;

// }
// while(i<10);

// let i = 1;
// let sum = 0;
// do{
//     if(i%2!==0){
//         sum = sum + i;
//     }
//     i++;
// }
// while(i<=100)
//     console.log(sum);


// FUNCTION
// function sum(){
   
//  console.log("hi i am a function");
// }
// sum()

// function sum(a,b){
//     console.log(a+b);
// }
// sum(100,200)


// function difference(a,b){
//     console.log(a-b);
// }
// difference(200,100)


// function multiple(a,b){
//     console.log(a*b);
// }
// multiple(100,5)

// function division(a,b){
//     console.log(a/b);
// }
// division(100,5)


// function modulus(a,b){
//     console.log(a%b);
// }
// modulus(100,15)


// function sum(number){
//     let sum= 0

//     for(let i =1;i<=number;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// sum(5)


// function that will contain large value from two numbers
// function largeValue(a,b){
//     if(a>b){
//         console.log("a is large number");
//     }
//     else{
//         console.log("b is large");
//     }

// }
// largeValue(15,10)

// function largeValue(a,b,c){
//     if(a>b){
//         console.log("a is large number");
//     }
//      else if(b>c){
//         console.log("b is large number");
//      }
//      else{
//         console.log("c is greater number");
//      }

//     }
// largeValue(2,6,7)




// ARROW FUNCTION


// const sum=(a,b)=>{
// console.log(a+b);
// }
// sum(10,5)


// const sub =(a,b)=>{
//     console.log(a-b);
// }
// sub (15,10)

// const mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(3,5)

// const div=(a,b)=>{
//     console.log(a/b);
// }
// div(15,3)


// ANONYMUS FUNCTION

// const sum =function(a){
//     console.log(a);
// }
// sum(10)

// IMMEDIATELY INVOKE FUNCTION

// (function(){
//     console.log('hello');
// }

// )()


// ARRAY

// COLLECTION OF ITEMS
// TO STORE MULTIPLE DATA

// [ ]IS USED


// const num= [1,2,3,4,5]
// let a = num[0]
// console.log(num[0]);


// const num= [1,2,3,4,5,6,7]
// for(let i =0; i<7; i++){
//     console.log(num[i]);
// }

// const num =[1,2,3,4,5]
// console.log(num.length);


// const num= [1,2,3,4,5,6,7,10]
// for(let i =0; i<num.length; i++){
//     console.log(num[i]);
// }


// let arr = [1,2,3,40,5,65,71,18,9,10]
// let sum = 0
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i]
    
// }
// console.log(sum);

// let arr =[1,2,3,4,5,6,7,8,9,11,15,17,20]
// for(let i = arr.length - 1; i>=0; i--){
//     console.log(arr[i]);
// }


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum = sum + arr[i]
//     }
// }
// console.log(sum);


// let count = 0
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         count++

//     }
        
// }
// console.log(count);


// let arr =[1,2,3,4,5,6,7,8,9,10]
// arr.push(100,200)
//     console.log(arr);


// Array.pop

// let arr =[1,2,3,4,5,6,7,8,9,10]
// let x = arr.pop()
//     console.log(arr);


// arry.shift
// let arr =[1,2,3,4,5,6,7,8,9,10]
// let x = arr.shift()
//     console.log(arr);

// Array.shift
// let arr =[1,2,3,4,5,6,7,8,9,10]
// let x = arr.unshift(1)
//     console.log(arr);


// let arr =[11,2,3,4,51]
//  let a=arr.pop()
//  let b=arr.pop()
//  let c=arr.pop()
//  let d=arr.pop()
//  let e =arr.pop()
 
//  let newArr=[]
//  newArr.push(a,b,c,d,e)

//     console.log(newArr);


// function reverseList(list){
//     let newList = [];
//     for(let i=list.length-1;i>=0;i--) {
//         newList.push(list[i])
//     }
//     return newList

// }
// let r=reverseList([1,2,3,4,5])
// console.log(r);


// function oddList(list){
//     let newList =[]
//     for(let i=0;i<list.length;i++){
//         if(list[i]%2!=0){
//             newList.push(list[i])

//         }
//     }
//         return newList
    


// }
// let o=oddList([1,2,3,4,5,6,7,8,9,10])
// console.log(o);



// function getMaxValue(list){
//     let max = list[0]
//     for(i=1; i<list.length;i++){
//         if(list[i] > max){
//             max = list[i]
//         }
//     }
// console.log(max);
// }
// getMaxValue([1,2,1300,400,7000])




// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.slice(1,3)
// console.log(newArr);
// // console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.slice(7,11)
// console.log(newArr);


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.slice(4)
// console.log(newArr);

// slice
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.slice(4,array.length)
// console.log(newArr);


// slice
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.splice(2,5,99)
// console.log(newArr)
// console.log(arr)

// concat

// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// let arr3=[11,12,13,14,15]
// let x=arr2.concat(arr1,arr3)
// console.log(x);


// .join

// let arr1=[1,2,3,4,5]
// console.log(arr1.join('ram'));


// let str="hello world"
// console.log(str.toUpperCase());
// console.log(str.startsWith('h'));
// console.log(str.endsWith('h'));

// TO ADD

// let str1="hello ravi"
// let str2="welcome home"
// let newStr= str1+" "+str2
// console.log(newStr);

// .replace

// let str="hello ravi"
// let x=str.replace("h","b")
// console.log(x);


// .replaceAll

// let str="hello ravi"
// let x=str.replaceAll("l","b")
// console.log(x);


// let str="hello ravi"
// let x=str.split(" ")
// console.log(x);

// REVERSE
// let fullName="Hello world"
// for(i=0;i<fullName.length;i++)
//     console.log(fullName[i]);
// let fullName="Hello world"
// let newStr=""
// for(let i=fullName.length-1;i>=0;i--){
//     newStr=newStr + fullName[i]
// }
// console.log(newStr);