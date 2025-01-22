
let arr = [[4,7,9,2],[5,9,11,6]];
for(var i=0;i<2;i++)
{
   
    for(var j=0;j<4;j++)
    {
       var num = arr[i][j];
       var f=true;
       for(var k=2;k<num;k++)
       {
        if(num%k==0)
        {
            f=false;
            break;
        }
       }
       if(f)
       {
        process.stdout.write(""+arr[i][j]);
       }
       
    }
    process.stdout.write("\n");
}
