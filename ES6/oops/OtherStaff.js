import {Admin} from './Admin.js';
class OtherStaff extends Admin{
    Accept2(bonus){
        this.bonus=bonus;
    }
    Display2(){
        console.log(`Bonus is ${this.bonus}`);
    }
}


let obj=new OtherStaff();
obj.Accept(101,'Rahul');
obj.Display();
//obj.Accept1(50000);
//obj.Display1();
obj.Accept2(5000);
obj.Display2();