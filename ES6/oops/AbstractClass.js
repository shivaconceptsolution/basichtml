class AbstractClass
{
    constructor()
    {
       if(this.constructor == AbstractClass)
        {
            throw new Error("Cannot instantiate AbstractClass");
        }   
        else
        {
            console.log("Abstract Class Instantiated");
        }
    }
    abstractMethod()
    {
        throw new Error("Cannot call abstract method");
    }
}
class NormalClass extends AbstractClass
{
    constructor()
    {
        super();
    }
    abstractMethod()
    {
        console.log("Abstract Method Implemented");
    }
}
let obj=new NormalClass();
obj.abstractMethod();