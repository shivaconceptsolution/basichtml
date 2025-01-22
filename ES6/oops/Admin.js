export class Admin{
    Accept(id,name){
       
        this.id=id;
        this.name=name;
    }
    Display(){
        console.log(`Id is ${this.id} and Name is ${this.name}`);
    }   
}



