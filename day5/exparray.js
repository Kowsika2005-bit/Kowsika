var arr=[10,20,30]
for(var index in arr)
{
  console.log(index);
}
for(var key of arr)
{
    console.log(key);
}
var a=[10,20,30];
console.log(a)
console.log(a[index])
a.push(90)
a.unshift(40)
console.log(a)
var obj={name:"Kowsika",dept:"cs"}
for(var key in obj){
  console.log(key)
  console.log(obj[key])
}
let name=["HTML","CSS"]
let b=name[0]
console.log(b," Language")
var arr1=[1,2,3,4]
var arr2=[...arr1,5,6,7]
console.log(arr2)
var marks=[50,60,30,20,60]
var[m1,m2,m3,m4,m5]=marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
var operator=["+","-","mul",10,20]
var [o1,o2,o3,o4,o5]=operator;
console.log(o1)
console.log(o2)
console.log(o3)
console.log(o4)
console.log(o5)
operator.length=6
console.log(operator)
operator.length=4
console.log(operator)
function bye(){
  console.log("bye");
}
function sum(a1,b1){
  console.log(a1+b1);
}
function hello(name,callback){
  console.log("Hello "+name)
  callback(10,20)
}
hello("Kowsika",sum)
hello("Manimegalai",bye)

const btn2=document.getElementsByClassName(".insta")
btn2.onclick=function(){
    window.open("https://www.instagram.com")
    alert("Welcome to instagram")
}