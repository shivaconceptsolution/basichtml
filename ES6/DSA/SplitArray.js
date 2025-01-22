let arr = [2,3,4,6,7,8,11,9,5,4,21]
let prime=[]
let nprime=[]
for(let i=0;i<arr.length;i++) //i=3
{
    var f=true;
    for(var num=2;num<arr[i];num++) //
    {
       if(arr[i]%num==0)
       {
           f=false;
           break;
       }
    }
    if(f)
    {
        prime.push(arr[i]); //2 3
    }
    else
    {
        nprime.push(arr[i]) //4 6
    }
}

console.log(prime)
console.log(nprime)