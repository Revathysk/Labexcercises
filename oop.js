// Create an Animal class that will have name, color, age, and legs properties.
// Create different methods for Animal class.

// Encapsulation - allows us to keep things inside where they're supposed to be

// This is encapsulation
// Superclass = parent
class Animal {
    // creating our properties for our class
    constructor(name, color, age, legs) {
      this.name = name
      this.color = color
      this.age = age
      this.legs = legs
    }
  
    // method
    genericSound() {
      console.log('This is a generic animal sound! WOOO')
  
      // this will point at the current object we are working with
      // console.log('we are inside genericSound', this)
    }
  }
  
  // Instiated Animal class using new keyword
  // const dog = new Animal('Spot', 'brown', 2, 4)
  // console.log(typeof dog)
  
  // const dog = 'Dillon'
  
  // dog.genericSound()
  
  // const cat = new Animal('Meow', 'blue', 2, 4)
  // cat.genericSound()
  
  // genericSound()
  
  
  // this doesn't belong anywhere
  // console.log(this)
  
  // INHERITANCE
  // The way we inherit from our parent is by extending
  // We use the extends keyword to inherit from our parent Class
  
  // Inheritance
  // Subclass = child
  class Dog extends Animal {
    constructor(name, color, age, legs, owner) {
      // super refers to the parent of the child class
      // in this example we are extending from Animal
      // which makes Animal the parent
  
      // If we do the constructor/super way, we need to pass the values we want from the parent inside our super()
      super(name, color, age, legs)
      this.owner = owner
    }
  
    playFetch() {
      console.log('Playing fetch with owner')
    }
  
    // Re-write our method 
    // method overriding
    // Polymorphism - we can change the statements inside our method that is named exactly the same from the parent
    genericSound() {
      console.log('Woof! Woof!')
      console.log( 'To call the function from parent on overiride the function :')
      super.genericSound();
    }
  }
  
  const spot = new Dog('Spot', 'Purple', 99, 4, 'Liv')
  // console.log(spot)
  
  spot.genericSound()
  spot.playFetch()
  
  // Yes, we can keep passin down/genes/method or properties down using extends
  // class Puppy extends Dog {
  // }
  
  // const puppy = new Puppy()
  // console.log(puppy)