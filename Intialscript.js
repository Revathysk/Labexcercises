class Spaceship
{
    constructor (identity,hull,firepower,accuracy)
    {   this.identity   = identity;
        this.hull       = hull;
        this.firepower  = firepower;
        this.accuracy   = accuracy;
        
    }
}

// Declaring US Ship with constant value
let  ussHelloWorldShip = new Spaceship('USS HelloWorld',20,5,.7);

// console.log(ussHelloWorldShip);

//  Declaring Alien ship Minimum nad maximun Hull, Firepower and Accuracy;

const alienMinHull = 3;
const alienMaxHull = 6;
const alienMinFirePower = 2;
const alienMaxFirePower = 4;
const alienMinAccuracy = 0.6;
const alienMaxAccuracy = 0.8;

//  Call  getValueMinMaxInclusive funtion to get random value between 2 integers - Hull and Firepower

function getValueMinMaxInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

//  Call getAccuracy function to get random value between two decimal values

function getAccuracy(min, max) {
  return Math.random() * (max - min) + min;
} 

// Initialize a Alien ship with values

let alienShip = [];

//console.log(alienShip);
const prompt = require("prompt-sync")();
let countOfAlien = prompt(" Count of Aliens Ships (in numbers):");
console.log(countOfAlien);

for (let alienCount=0; alienCount < countOfAlien ; alienCount++) 
{
    let alienIdentity =`Alien-${alienCount}`;
    let alienHull = getValueMinMaxInclusive(alienMinHull,alienMaxHull);
    let alienFirePower = getValueMinMaxInclusive(alienMinFirePower,alienMaxFirePower);
    let alienAccuracy =  getAccuracy( alienMinAccuracy,alienMaxAccuracy);
    alienShip[alienCount] = new Spaceship(alienIdentity,alienHull,alienFirePower,alienAccuracy);

    // Game logic to attack alien and check USShellow world status
    let ussHelloWorldShipIntact = true;

    console.log (`${ussHelloWorldShip.identity} vs ${alienShip[alienCount].identity} `);
    let baselineAccuracy= getAccuracy( alienMinAccuracy,alienMaxAccuracy);
            
    let alienShipIntact =true;
    //USSHelloworld Ship attacks till alien in eliminated

    
    while (alienShipIntact === true && ussHelloWorldShipIntact === true)
    {
        //  If USS hello world Ship has more accuracy than baseline
        if (ussHelloWorldShip.accuracy > baselineAccuracy)
        {  
        // Alien ship was attacked. Check for Hull damage of alien ship.
        // Rules is to Subtarct firepower of USSHelloworld from Alien Hull.
        // If Alien Hull is zero or less then ship is destroyed. Move to next Alien ship
           
            console.log (`\n${ussHelloWorldShip.identity} Firing ---->`);
            console.log(`${alienShip[alienCount].identity} got hit`);

            alienShip[alienCount].hull -= ussHelloWorldShip.firepower;
            

        // If Alien Hull is zero or less then ship is destroyed 
        // Set AlienShipintact to False to proceed to next Alienship

            if (alienShip[alienCount].hull <= 0)
            {
            console.log(`\n***${alienShip[alienCount].identity} eliminated***\n`)
            alienShipIntact = false;         
            }  
            else
            {
              console.log(`${alienShip[alienCount].identity} hull status: `,alienShip[alienCount].hull);
            }   
        }
       else 
          { 
            console.log (`\n${ussHelloWorldShip.identity} Firing ---->`);
            console.log (`${ussHelloWorldShip.identity} missed target X ${alienShip[alienCount].identity}`) 
          };

          // Alien Ship attacks USSHelloworld
            baselineAccuracy= getAccuracy( alienMinAccuracy,alienMaxAccuracy);
            if (alienShipIntact===true) 
            {
              if (alienShip[alienCount].accuracy > baselineAccuracy) 
              {
                console.log (`\n${alienShip[alienCount].identity} ship Firing ---------->`);
                console.log(`${ussHelloWorldShip.identity}ship got hit`);
                ussHelloWorldShip.hull = ussHelloWorldShip.hull - alienShip[alienCount].firepower;
                if( ussHelloWorldShip.hull <= 0)             
                  {
                  ussHelloWorldShipIntact = false;
                  console.log(`\n ${ussHelloWorldShip.identity}:Game lost\n`)
                  }
            } 
            else 
            {
              console.log (`\n${alienShip[alienCount].identity}  ship Firing ---------->`);
              console.log(`Attack by ${alienShip[alienCount].identity} averted`)              
            }
          }

    } // While loop US ship and Alien Ship intact

    // Need to get input from user to contiune or exit from game  
    console.log(`\n ${ussHelloWorldShip.identity} hull status: `,ussHelloWorldShip);
         
    if (alienCount+1 < countOfAlien)    
    {
      const prompt = require("prompt-sync")();
      const input = prompt(" USS Hellow world - want to contiune attack?  'y' or 'n' ");
    
      let attackNextAlienShip = input;

      if (attackNextAlienShip === 'y')
      { 
        console.log(`${ussHelloWorldShip.identity} eliminate threat ...`) 
      }
      else if (attackNextAlienShip === 'n')
      {
        console.log( `${ussHelloWorldShip.identity}: mission abort`);
        console.log(" -------Game Over-------- ")
        break;
      }
      else 
      {
        console.log ("Invalid input")
        break;
      }
    }
    
    if (ussHelloWorldShipIntact === false)
      { 
      console.log(`\n-------Game Lost-----------`)
      break;
      }
        
    if ( alienCount+1 == countOfAlien && ussHelloWorldShip.hull > 0 ) 
      {
       console.log("!!! Won the Game !!!")
       break;
      }

} // For loop for alien line up
     