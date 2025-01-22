
let arr = [[4,7,9,2],[5,9,11,6]];
for(var i=0;i<2;i++)
{
    var max=0;
    var smax=0;
    for(var j=0;j<4;j++)
    {
        if(max<arr[i][j]){
            smax=max;
            max=arr[i][j];
        }
        else if(smax<arr[i][j])
        {
            smax=arr[i][j];
        }
        process.stdout.write(""+arr[i][j] + " ");
    }
   process.stdout.write("Max is "+max + "\n");
}
