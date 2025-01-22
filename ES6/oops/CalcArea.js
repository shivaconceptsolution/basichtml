class CalcArea
{
    #radius; //private member
    constructor(_radius)
    {
        this.#radius = _radius;
    }
    get radius()
    {
        return this.#radius;
    }
    set radius(_radius)
    {
        if(_radius<0)
        {
            console.log('Radius cannot be negative');
            return;
        }
        else
        {
        this.#radius = _radius;
        }
    }
    area()
    {
        return Math.PI*this.#radius*this.#radius;
    }
}
const obj = new CalcArea(5);
obj.radius = 10; //setter  indirect access
console.log(obj.radius); //getter
//console.log(obj.#radius);
console.log(obj.area());
