function sub(result,b)
{
     console.log(result-b);
}

function add(a,b,callback)
{
    var result=a+b;
    console.log(result)
    callback(result,b);
}

add(5,6,sub); // Outputs: 11