function Student(rno,name){
    this.rno = rno
    this.name = name
    this.display = function(){
        console.log(this.rno,this.name)
    }
}
var student1 = new Student(101,'Ravi')
student1.display()
var student2 = new Student(102,'Ramesh')
student2.display()