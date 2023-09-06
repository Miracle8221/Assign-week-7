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
        console.log(this.sound);
        console.log(`Color: ${this.color}`)
    }
};
const animal1 = new Dog('Dog', 'Woof-woof', 'Black'); 
// Dog sound
animal1.animalSound();