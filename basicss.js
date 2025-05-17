var b=()=>[
    console.log(5-5)
]
b()
var a=100
var b=50
const sub=()=>[
    console.log(a-b)
]
sub(a,b)
n=10
var result=(n%2==0)?"even":"odd";
console.log(result)
sum=0
for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(`${i} is even`)
        sum=sum+i;
    }
}
console.log(`The sum is ${sum}`)
var n=1
sum=0
function eadd()
{
    while(n<=10)
    {
      if(n%2==0)
      {
        console.log(n);
        sum=sum+n
      }
      n++
    }
    console.log(`The sum is ${sum}`)
}
eadd()