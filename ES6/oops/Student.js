class Student{
    constructor(rno,name){
        this.rno = rno
        this.name = name
    }
    display(){
        console.log(this.rno,this.name)
    }
}
const obj = new Student(101,'Ravi')
obj.display()
const obj1 = new Student(102,'Jay')
obj1.display()