let arr=[2,9,6,7]
console.log(arr[0]);
let [a,b,c,d]=arr;
console.log(a,b,c,d);

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

for(let i in arr)
{
    console.log(arr[i]);
}
for(let i of arr)
{
    console.log(i);
}
arr.forEach((v,i)=>{
    console.log(v);
});

console.log("Create Stack");
let x=[];
x.push(2);
x.push(3);
x.push(4);
x.push(5);
while(x.length>0)
{
    console.log(x.pop());
}