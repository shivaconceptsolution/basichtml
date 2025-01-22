import { Admin } from './Admin.js';
export class Employee extends Admin{
    Accept1(salary){
        this.salary=salary;
    }
    Display1(){
        console.log(`Salary is ${this.salary}`);
    }
 }

 let obj=new Employee();
obj.Accept(101,'Rahul');
obj.Display();
obj.Accept1(50000);
obj.Display1();
