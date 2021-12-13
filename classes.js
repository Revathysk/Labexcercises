// class person{
//     greet()
//     {console.log()}
// }

// const ann= new person();
// const revathy = new person();
// console.log(ann);
// console.log(revathy);
// console.log(typeof ann);

// const vendingMachine = 
// {
//     snacks: [ 
//         {
//             name:'snickers',
//             price:1 
//         },

//         {   name:'skittles',
//             price:1.50
//         },
        
//         {   name:'skittles',
//             price:1.50
//         } 
//     ],
//     vend(input) {
//         //console.log ('vending', vendingMachine.snacks[input])
//         console.log ('vending', this.snacks[input])
//     }
// }

// Making a customizable instant of object

class Person
{
    constructor (fname, lname, country, city)
    { 
        this.fname = fname;
        this.lname = lname;
        this.country = country;
        this.city = city;
    }
    greet(otherPerson) {
        console.log(`Hi ${otherPerson}`);
    }
    walk() { 
    console.log('The weather is nice !');        
    }
}

const Rev = new Person('Revathy','Kandasamuy','US','Dallas');
console.log(Rev);


