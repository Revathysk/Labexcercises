//  prompt-sync() is used to receive user input on visula studio console
//  For prompt to work in VS console run the below command in program directory
// ----- > npm install prompt-sync

const usshwHull = document.querySelector('.usHull');
const enemyHull = document.querySelector('.enemyHull');
const enemyFirePower = document.querySelector('.enemyFirePower');
const enemyAccuracy = document.querySelector('.enemyAccuracy');

let index = 0;  // will keep count of alien USS ship attacks
let countOfAlien =0; //initialize to zero

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
    }

  } // attack method 

} // class Spaceship declaration

// **** Declaring USS Ship with constant value**********
let ussHelloWorldShip = new Spaceship('USS HelloWorld', 20, 5, .7);

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

//   Check the status of USS ship and Alien Ship

function checkStatus() {

  if (ussHelloWorldShip.intact === true) {
    // Would you like to coniune striking or ertreat
    if (index < countOfAlien) {
      
      const attackNextAlienShip = prompt(" USS Hellow world - want to contiune attack?  'y' or 'n' ");

      if (attackNextAlienShip === 'y') {
        console.log("contiune the game...")
        setTimeout(() =>{
        alienInitialize();},1000)
      }
      else if (attackNextAlienShip === 'n') {
        prompt(" -------Mission Abort... Game Over-------- ")
      }
      else {
        prompt(" Invalid input - Exiting game...")
      }

    } 
    else if (index == countOfAlien) {
      //   setTimeout(() => {
      prompt("!!! Won the Game !!!")
      // }, 2000)       
    }
  }
  else { prompt(" ((( Game Lost ))) ") }

} /// function check status

  //  US Ship attacks till hull > 0 or alien eliminated
  function firing(ussHelloWorldShip, alienShip) {
    //USSHelloworld Ship attacks till alien in eliminated
    const alienMinAccuracy = 0.6;
    const alienMaxAccuracy = 0.8;

    while (alienShip.intact === true && ussHelloWorldShip.intact === true) {
      // Alien Ship attacks USSHelloworld

      if (ussHelloWorldShip.intact === true) {
        console.log(" USS Hellow world : Firing --> Press Enter to contiune ");
        let baselineAccuracy = getAccuracy(alienMinAccuracy, alienMaxAccuracy);
        ussHelloWorldShip.attackShip(alienShip, baselineAccuracy);
        updateStatus(ussHelloWorldShip, alienShip);
      }

      if (alienShip.intact === true) {
        console.log(" Alien: Firing --> Press Enter to contiune");
        let baselineAccuracy = getAccuracy(alienMinAccuracy, alienMaxAccuracy);
        alienShip.attackShip(ussHelloWorldShip, baselineAccuracy);
        updateStatus(ussHelloWorldShip, alienShip);
      }

    } // While loop US ship and Alien Ship intact
    checkStatus();
  }

  // Initialize Alien ship occurence
  function alienInitialize() {
    let alienIdentity = `Alien-${index}`;
    let alienHull = getValueMinMaxInclusive(3, 6);
    let alienFirePower = getValueMinMaxInclusive(2, 4);
    let alienAccuracy = getAccuracy(0.6, 0.8);
    index += 1;
    alienShip = new Spaceship(alienIdentity, alienHull, alienFirePower, alienAccuracy);
    updateStatus(ussHelloWorldShip, alienShip);
    firing(ussHelloWorldShip, alienShip);
  }

  // HTML executed from HTMLcalling playgame() function
  // Get alien count
 

  function playGame() {
    countOfAlien = alienCount();
    alienInitialize();
  }