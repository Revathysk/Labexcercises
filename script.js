
//  prompt-sync() is used to receive user input
//  For prompt to work in VS console run the below command in program directory
// ----- > npm install prompt-sync

class Spaceship
{
    constructor (identity,hull,firepower,accuracy,intact)
    {   this.identity   = identity;
        this.hull       = hull;
        this.firepower  = firepower;
        this.accuracy   = accuracy;
        this.intact     = true || intact;
    }

    attackShip(opponentShip,baselineAccuracy)
    {
      if (this.accuracy > baselineAccuracy)
        {  
        // Rules is to Subtarct firepower of striking ship from opponent Hull.
        // If Alien Hull is zero or less then ship is destroyed. Move to next Alien ship
           
         //   console.log (`\n${this.identity} firing ---->`);
            console.log(`${opponentShip.identity} got hit`);
            opponentShip.hull -= this.firepower;
 
        // If opponent ship hull is zero or less then ship is destroyed 
        // Set opponentShip.intact to false to proceed to next step         

          if (opponentShip.hull <= 0)  {              
            console.log(`\n***${opponentShip.identity} eliminated ***\n`)
            opponentShip.intact = false;         
            }  
            else  {
              console.log(`${opponentShip.identity} hull status: `,opponentShip.hull);
            }   
          }
        else         { 
           console.log (`\n${this.identity} firing ---->`);
           console.log (`${this.identity} missed target X ${opponentShip.identity}`) 
        };

    } // attack method 

} // class Spaceship declaration

// Declaring USS Ship with constant value
let  ussHelloWorldShip = new Spaceship('USS HelloWorld',20,5,.7);

//Display US ship init
//console.log(ussHelloWorldShip);

// Declaring Alien ship Minimum nad maximun Hull, Firepower and Accuracy;

const alienMinHull = 3;
const alienMaxHull = 6;
const alienMinFirePower = 2;
const alienMaxFirePower = 4;
const alienMinAccuracy = 0.6;
const alienMaxAccuracy = 0.8;

//      Call  getValueMinMaxInclusive funtion to get random value between 2 integers - Hull and Firepower

function getValueMinMaxInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

//      Call getAccuracy function to get random value between two decimal values

function getAccuracy(min, max) {
  return Math.random() * (max - min) + min;
} 
 
let alienShip = [];

//console.log(alienShip);
const prompt = require("prompt-sync")();
let countOfAlien = prompt(" Count of Aliens Ships (in numbers):");
console.log(countOfAlien);
  
for (let i=0; i < countOfAlien ; i++) 
{
  // Initialize Alien ship occurence

    let alienIdentity =`Alien-${i}`;
    let alienHull = getValueMinMaxInclusive(alienMinHull,alienMaxHull);
    let alienFirePower = getValueMinMaxInclusive(alienMinFirePower,alienMaxFirePower);
    let alienAccuracy =  getAccuracy( alienMinAccuracy,alienMaxAccuracy);
    alienShip[i] = new Spaceship(alienIdentity,alienHull,alienFirePower,alienAccuracy);


    console.log (`${ussHelloWorldShip.identity} vs ${alienShip[i].identity} `);
     
    //USSHelloworld Ship attacks till alien in eliminated
    
    while (alienShip[i].intact === true && ussHelloWorldShip.intact === true)
    {             
        // Alien Ship attacks USSHelloworld
          
        if (ussHelloWorldShip.intact===true)        {                
          const prompt = require("prompt-sync")();
          const input = prompt(" USS Hellow world : Firing --> Press Enter to contiune ");
          let baselineAccuracy = getAccuracy( alienMinAccuracy,alienMaxAccuracy);
          ussHelloWorldShip.attackShip(alienShip[i],baselineAccuracy)
        }

        if (alienShip[i].intact===true)        {                
          const prompt = require("prompt-sync")();
          const input = prompt(" Alien: Firing --> Press Enter to contiune");
          let baselineAccuracy = getAccuracy( alienMinAccuracy,alienMaxAccuracy);
          alienShip[i].attackShip(ussHelloWorldShip,baselineAccuracy);
        }

    } // While loop US ship and Alien Ship intact

    console.log(`\n ${ussHelloWorldShip.identity} hull status: `,ussHelloWorldShip);
    
    // Would you like to coniune striking or ertreat
         
    if ( i+1 < countOfAlien && ussHelloWorldShip.hull > 0)    {
      const prompt = require("prompt-sync")();
      const input = prompt(" USS Hellow world - want to contiune attack?  'y' or 'n' ");
    
      let attackNextAlienShip = input;

      if (attackNextAlienShip === 'y')      {
        console.log( "contiune the game...")
      }
      else if (attackNextAlienShip === 'n')      {
        console.log( `${ussHelloWorldShip.identity}: mission abort`);
        console.log(" -------Game Over-------- ")
        break;
      }
      else { 
         console.log ("Invalid input to contiune the game")
         break;
      }
    }
    
    if (ussHelloWorldShip.intact === false)      { 
      console.log(`\n-------Game Lost-----------`)
      break;
      }
    
    if ( i+1 == countOfAlien && ussHelloWorldShip.hull > 0 )       {
       console.log("!!! Won the Game !!!")
       break;
      }

} // For loop for alien array 

 
     