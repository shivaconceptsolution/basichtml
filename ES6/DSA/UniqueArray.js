let arr = [2,3,4,6,7,2,9,8,7,3,9]
// o/p 3 4 6 9 8

for(var i=0;i<arr.length;i++) //1
{
    var f=true;
    for(var j=0;j<arr.length;j++) //2
    {
        if(arr[i]==arr[j] && i!=j)
        {
           f=false;
           break;
        }
    }
    if(f)
    {
        console.log(arr[i]); //3
    }
}