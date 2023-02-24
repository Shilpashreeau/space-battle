class USSpaceShip {
  spaceShipHull = 20;
  spaceShipFirepower = 5;
  spaceShipAccuracy = 0.7;

  attack() {
    console.log("Captain is attacking");
    const random=Math.random();
    if(this.spaceShipAccuracy>random){
    //uss firepower deducts alien ship hull
    a1.hull=a1.hull-this.spaceShipFirepower
    console.log("direct hit");
    console.log(a1.hull);
    }


    else{
    //console.log("attack missed");
    }
}
  retreat() {
    console.log("Captain is stepping back");
}
}

class AlienShip {
  
    alienShipHull = Math.floor(Math.random() * 4) + 3;
    alienShipFirepower = Math.floor(Math.random() * 3) + 2;
    alienShipAccuracy = Math.floor(Math.random() * 3) + 6 / 10;
    isAlive=true;
  
  
  attack() {
    console.log("Alien is attacking");
}
retreat() {
    console.log("Alien is stepping back");
}
}
const captainShip = new USSpaceShip();

const a1 = new AlienShip();
const a2 = new AlienShip();
const a3 = new AlienShip();
const a4 = new AlienShip();
const a5 = new AlienShip();
const a6 = new AlienShip();

const alienShipArray=[a1,a2,a3,a4,a5,a6];
//console.log(a1);

while(alienShipArray.length!==0){

captainShip.attack();
alienShipArray.shift();
let userChoice=prompt("Please choose captain or alien for the attack");
if(userChoice==='Captain'){
    captainShip.attack();
}else{
    alienShipArray[0].attack();
}
console.log(alienShipArray);


}
captainShip.retreat();