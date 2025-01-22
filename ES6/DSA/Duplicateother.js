let arr = [2,3,4,6,7,2,9,8,7,3,9,2,2,2,9,9]
// o/p 2 3 7 9
let repeat=[];
for(var i=0;i<arr.length;i++) //0
{
    var f=false;
    var f1=true;
    for(var k=0;k<i;k++)
        {
            if(arr[i]==arr[k])
            {
                f1=false;
                break;
            }
        }
    for(var j=i+1;j<arr.length && f1;j++) //2
    {
        if(arr[i]==arr[j])
        {
           f=true;
           break;
        }
    }
    if(f)
    {
        console.log(arr[i]);
    }
  
}
