class Animals {
constructor(name,color,age,legs)
    {this.name  = name;
     this.color = color;
     this.age   = age;
     this.legs  = legs;
}

displayAnimalColor(otherColor) {
    this.color=otherColor;
    console.log (this.name + 'color is' + this.color );
    }
displayAnimalAge() {
    console.log (`${this.name} lives up to ${this.age} on average` );
    }   
displayAnimalLegs() { 
    console.log (`${this.name} has ${this.legs} legs` );
    }
}

const lion = new Animals('Lions','tawny yellow', 15, 4);
console.log(lion);
lion.displayAnimalColor('Ash Brown');
lion.displayAnimalAge();
lion.displayAnimalLegs();




