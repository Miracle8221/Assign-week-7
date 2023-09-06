// Create a class constructor
class Animal{
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    // To make the animal sound
    animalSound() {
        console.log(this.sound)
    }
}
// Create a subclass Dog to inherit from the Animal
class Dog extends Animal {

}

const animal1 = new Animal('Dog', 'Woof-woof'); 
console.log(animal1.animalSound())