class Bank
{
    #balance; //private variable
    constructor(pincode)
    {
        this.pincode = pincode;
        this.#balance = 10000;
    }
    credit(_amount)
    {
        if(this.login())
        {
            this.#balance += _amount;
        }
        else
        {
            console.log('Invalid pincode');     
        }
    }
    debit(_amount)
    {
        if(this.login())
        {
            if(this.#balance<_amount)
            {
                console.log('Insufficient balance');
                return;
            }
            this.#balance -= _amount;
        }
        else
        {
            console.log('Invalid pincode');     
        }   
    }
    login()
    {
        if(this.pincode===1234)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    get balance()
    {
        if(this.login())
        {
            return this.#balance;
        }
        else
        {
            console.log('Invalid pincode');
        }
    }
}

const obj = new Bank(12345);
obj.credit(5000);
obj.debit(2000);
console.log(obj.balance);