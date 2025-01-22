const addition=(a,b)=>a+b;
console.log(addition(5,6)); // Outputs: 11
const swap= (a,b)=>{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b);
}
swap(5,6); // Outputs: 6 5