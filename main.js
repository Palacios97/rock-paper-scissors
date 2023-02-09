document.querySelector('body').style.backgroundColor = 'black';
let instructions = "Hello to my rock paper scissors game. winner or loosers will be display from here. In a moment the browser will ask you what to choose. After that, will be the computer who will choose";
alert("Please open the console to see the instructions");
console.log(instructions);

function getValue(){
  let userChoice;
  
  while(true){
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
      break;
    }else{
      alert('Please select between Rock, Paper or Scissors')
    }
  }

  return userChoice;
}

//Computer function
let computerSays = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
  const randomAnswer = Math.floor(Math.random() * 3);
  return computerSays[randomAnswer];
}
// console.log(computerPlay()); function returns what we need

//round function

const playRound = (playerSelection, computerSelection) => {
 alert('Player 1');
 playerSelection = getValue();
 console.log(`Player 1 picked ${playerSelection}`);
 alert('Player 2');
 computerSelection = computerPlay();
 console.log(`Player 2 picked ${computerSelection}`);

 if(playerSelection === computerSelection){
  console.log('It is a tied, both picked same option');
  return 'it is a tied';
 }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
  console.log('You win, Rock beats Scissors');
  return 'You win';
 }else if(playerSelection == 'paper' && computerSelection == 'rock'){
  console.log('You win, Paper beats Rock');
  return 'You win';
 }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
  console.log('You win, Scissors beats Paper');
  return 'You win';
 }else{
  console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
  return 'You lose';
 }

}

let playerSelection = '';
let computerSelection = '';

//5 rounds
let outcome;

function game() {
  for(let i = 0; i < 5 ; i++){
    myScore(outcome);
  }
  gameOver(score);
}

const score = {
  wins: 0,
  loses: 0,
  draws: 0,
}

function myScore(outcome) {
outcome = playRound();

switch(outcome){
  case 'You win':
    score.wins++;
    break;
  case 'You lose':
    score.loses++;
    break;
  case 'it is a tied':
    score.draws++;
    break;
}

console.log(`wins: ${score.wins}, loses: ${score.loses}, draws: ${score.draws}`);
}
function gameOver(score) {
  if (score.wins > score.loses && score.draws < score.wins) {
    alert('Congratulations! you win. Refresh the page if you want to keep playing');
    console.log('Win');
  }else if(score.loses > score.wins && score.draws < score.loses){
    alert('Sorry, you lose. Refresh the page if you want to keep playing');
    console.log('Lose');
  }else{
    alert('Tied, refresh the page if you want to keep playing');
    console.log('Tied');
  }
}

game();

