const person= {name:"Ravi",age:25,city:"Bangalore"} 
const {name,age,city}=person
console.log(name,age)
console.log(person.city)

const numbers=[1,2,3,4,5]
const [num1,num2,...num3]=numbers
console.log(num1,num2)
console.log(num3)

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);