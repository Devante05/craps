const winningNums = [7, 11];
const losingNums = [2, 3, 12];
const otherNums = [4 ,5, 6, 8, 9, 10]
let firstRollerNum;
let rollerNum = 0
let firstRoll = true
let rollerWins = 0;
let rollerLoss = 0 ;
let numberTracker = 0;
let gameOver = null

// rolling two dice
const rollDice =  () => {
  if (gameOver === false){
    if (firstRoll === true){
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;
      console.log('ROLLING '+'    ' + dice1 + '   '+ dice2)
      firstRollerNum = dice1 + dice2
      numberTracker = firstRollerNum
      console.log(numberTracker)
      diceCheck(firstRollerNum,numberTracker );
      }
    else if (firstRoll === false ){
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;
      console.log('ROLLING AGAIN'+'    ' + dice1 + '   '+ dice2)
      rollerNum = dice1 + dice2
      diceCheck(rollerNum, numberTracker);
    }
  }
  else{
    console.log("Please start a new game")
    
  }
}
//New round, resets the point and makes first roll true
const reset = () => {
  if (rollerWins === 8 || rollerLoss === 8){
    console.log("game end")
    gameOver = true
   }
  else {
    numberTracker = null
    firstRoll = true
    firstRollerNum = null
    rollDice();
   }
}


const rollAgain = () => {
    firstRoll = false
    rollDice();
}


const diceCheck = (rollerNum, numberTracker) => {

        //WIN. first roll equals 7 or 11 OR point was scored twice
    if ((firstRoll === true && winningNums.includes(numberTracker)) || (firstRoll === false && numberTracker === rollerNum)){
      ++rollerWins
      console.log("$$roller won " + rollerWins)
      reset();
  }
        //LOSS. first roll includes 2, 3, or 12 OR after the first roll, 7 is rolled before rollers' point
  else if ((firstRoll === true && losingNums.includes(numberTracker)) || (firstRoll === false && numberTracker != rollerNum && rollerNum === 7)){
      ++rollerLoss
      console.log("$$roller lost " + rollerLoss)
      reset();
      

  }
      //ROLL AGAIN. if the winning or losing numbers were not hit on the first roll the roller rolls again
  else if ((firstRoll === true && otherNums.includes(numberTracker)) || (firstRoll === false && rollerNum != 7 && numberTracker != rollerNum)) {
    if (firstRoll) {
      console.log("First ROll ---- NO WINNER OR LOSER ROLL AGAIN")
    } 
    else {
      console.log("Rolling again")
    }
      rollAgain();
  }             
}
//start game
gameOver = false
console.log("begin game")
rollDice();
