// Create a class constructor
class Animal{
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    // To make the animal sound
    animalSound() {
        console.log(this.sound);
    }
}
// Create a subclass Dog to inherit from the Animal and a property color to the Dog
class Dog extends Animal {
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }
    animalSound(){
        super.animalSound();
        console.log(`Color: ${this.color}`)
    }
}

const animal1 = new Animal('Dog', 'Woof-woof'); 
console.log(animal1.animalSound())