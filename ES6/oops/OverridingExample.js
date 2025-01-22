class Animal {
    makeSound() {
        console.log('Some generic sound');
    }
}
class Dog extends Animal {
    makeSound() {
        super.makeSound();
        console.log('Bark');
    }
}

const obj = new Dog();
obj.makeSound(); //Bark

