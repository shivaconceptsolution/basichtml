let a = [[3,4],[5,2]]
let b = [[2,2],[2,3]]
let arr=[[0,0],[0,0]]
for(var i=0;i<2;i++) //2
{
    for(var j=0;j<2;j++) //1
    {
        var c=0;
        for(var k=0;k<2;k++) //0
        {
           c=c+a[i][k]*b[k][j]; //14
        }
        arr[i][j]=c;
        console.log(arr[i][j]);
    }
        
      
}

