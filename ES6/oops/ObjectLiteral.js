const student = {
    rno:101,
    name:'Ravi',
    display:function(){
        console.log(this.rno,this.name)
    }   
}
student.display()