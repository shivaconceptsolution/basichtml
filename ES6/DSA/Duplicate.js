let arr = [2,3,4,6,7,2,9,8,7,3,9,2,2,2,9,9]
// o/p 2 3 7 9
let repeat=[];
for(var i=0;i<arr.length;i++) //1
{
    var f=false;
    for(var j=i+1;j<arr.length;j++) //2
    {
        if(arr[i]==arr[j])
        {
           f=true;
           break;
        }
    }
    if(f)
    {
        for(var k=0;k<repeat.length;k++)
        {
            if(arr[i]==repeat[k])
            {
                f=false;
                break;
            }
        }
        if(f)
        {
        repeat.push(arr[i]); //3
        }
    }
}
console.log(repeat)