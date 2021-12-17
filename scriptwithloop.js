//  prompt-sync() is used to receive user input on visula studio console
//  For prompt to work in VS console run the below command in program directory
// ----- > npm install prompt-sync

const usshwHull = document.querySelector('.usHull');
const enemyHull = document.querySelector('.enemyHull');
const enemyFirePower = document.querySelector('.enemyFirePower');
const enemyAccuracy = document.querySelector('.enemyAccuracy'); 

class Spaceship {
  constructor(identity, hull, firepower, accuracy, intact) {
    this.identity = identity;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.intact = true || intact;
  }

  attackShip(opponentShip, baselineAccuracy) {
    if (this.accuracy > baselineAccuracy) {
      // Rules is to Subtarct firepower of striking ship from opponent Hull.
      // If Alien Hull is zero or less then ship is destroyed. Move to next Alien ship

      console.log(`\n${this.identity} firing ---->`);
      //   prompt(`${opponentShip.identity} got hit`);
      opponentShip.hull -= this.firepower;

      // If opponent ship hull is zero or less then ship is destroyed 
      // Set opponentShip.intact to false to proceed to next step         

      if (opponentShip.hull <= 0) {
        //prompt(`***${opponentShip.identity} eliminated ***`)
        console.log(`***${opponentShip.identity} eliminated ***`)
        opponentShip.intact = false;
      }
      else {
        //    prompt(`${opponentShip.identity} hull status: `,opponentShip.hull);
        console.log(`${opponentShip.identity} hull status: `, opponentShip.hull);
      }
    }
    else {
      // prompt(`${this.identity} missed target --> ${opponentShip.identity}`) 
      console.log(`${this.identity} missed target --> ${opponentShip.identity}`)
    };

  } // attack method 

} // class Spaceship declaration

// ----  HTML start button call the gamestart function ---- //
function alienCount() {
  let countOfAlien = prompt("Count of Aliens Ships (in numbers):");
  return countOfAlien;
}

// Call  getValueMinMaxInclusive funtion to get random value between 2 integers - Hull and Firepower

function getValueMinMaxInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//      Call getAccuracy function to get random value between two decimal values

function getAccuracy(min, max) {
  return Math.random() * (max - min) + min;
}

// Update DOM hull,firepower and Accuracy status
function updateStatus(usshwShip, alienShip) {
  usshwHull.innerText = usshwShip.hull
  enemyHull.innerText = alienShip.hull
  enemyFirePower.innerText = alienShip.firepower
  enemyAccuracy.innerText = alienShip.accuracy
}

// HTML executed from HTMLcalling playgame() function
function playGame() {
  // Declaring USS Ship with constant value
  let ussHelloWorldShip = new Spaceship('USS HelloWorld', 20, 5, .7);

  // Declaring Alien ship Minimum nad maximun Hull, Firepower and Accuracy;

  const alienMinAccuracy = 0.6;
  const alienMaxAccuracy = 0.8;

  //let alienShip = [];
  let countOfAlien = alienCount();

 }
    // Initialize Alien ship occurence
  
  function alienInitialize(countOfAlien) 
  {  
   
    { 
    i-=countOfAlien;
    let alienIdentity = `Alien-${i}`;
    let alienHull = getValueMinMaxInclusive(3, 6);
    let alienFirePower = getValueMinMaxInclusive(2, 4);
    let alienAccuracy = getAccuracy(0.6, 0.8);

    alienShip[i] = new Spaceship(alienIdentity, alienHull, alienFirePower, alienAccuracy);

    updateStatus(ussHelloWorldShip, alienShip[i]);

    //console.log (`${ussHelloWorldShip.identity} vs ${alienShip[i].identity} `);

    //USSHelloworld Ship attacks till alien in eliminated

    while (alienShip[i].intact === true && ussHelloWorldShip.intact === true) {
      // Alien Ship attacks USSHelloworld

      if (ussHelloWorldShip.intact === true) {
        console.log (" USS Hellow world : Firing --> Press Enter to contiune ");
        let baselineAccuracy = getAccuracy(alienMinAccuracy, alienMaxAccuracy);
        ussHelloWorldShip.attackShip(alienShip[i], baselineAccuracy);
        updateStatus(ussHelloWorldShip, alienShip[i]);        
      }

      if (alienShip[i].intact === true) {
        console.log (" Alien: Firing --> Press Enter to contiune");
        let baselineAccuracy = getAccuracy(alienMinAccuracy, alienMaxAccuracy);
        alienShip[i].attackShip(ussHelloWorldShip, baselineAccuracy);
        updateStatus(ussHelloWorldShip, alienShip[i]);        
      }

    } // While loop US ship and Alien Ship intact

    if (ussHelloWorldShip.intact === false) {
      //setTimeout(() => {
        prompt(`-------Game Lost-----------`)
      //}, 2000)
      break;
    }
    
    // Would you like to coniune striking or ertreat
    if (countOfAlien > 0 && ussHelloWorldShip.hull > 0) {
      
        const attackNextAlienShip = prompt(" USS Hellow world - want to contiune attack?  'y' or 'n' ");

        if (attackNextAlienShip === 'y') {
          console.log("contiune the game...")
        }
        else if (attackNextAlienShip === 'n') {           
          prompt(" -------Mission Abort... Game Over-------- ")
          i = countOfAlien;
        }
        else {
          prompt("Invalid input to contiune the game")
          i = countOfAlien;
        }

    //  }, 2000)

    }

   if (i + 1 == countOfAlien && ussHelloWorldShip.hull > 0) {
   //   setTimeout(() => {
        prompt("!!! Won the Game !!!")
     // }, 2000)
      break;
    }


  //} // For loop for alien array 
} // Playgame

