var a=10;
var b=20;
var c=a+b;
console.log(a)
console.log(b)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(b/a)
console.log(a>b)
console.log(a==b)
console.log(a<b)

function add(){
    var a=10;
    var b=20;
    console.log(a+b)
}
add();
function add(a,b){
    console.log(a+b)
}
add(10,40)
add(5,5)
function sub(a,b){
    console.log(a-b)
}
sub(5,5)
console.log(5=="five")
console.log(5=="5")
console.log(5==5)
console.log(5===5)
console.log(5==="five")
console.log(5!="Three")
console.log(5!=5)
console.log(5!==5)
console.log(5!==3)
var a='Kowsika'
console.log(a)
var a=10;
var b=20;
console.log(`${a}+${b}=${a+b}`)
console.log(`this is a ${a}+this is a ${b} = the sum is ${a+b}`)
var n=10;
if(n%2==0)
{
    console.log("even")
}
else{
    console.log("odd")
}
for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}