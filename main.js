document.querySelector('body').style.backgroundColor = 'black';
let instructions = "Hello to my rock paper scissors game. winner or loosers will be display from here. In a moment the browser will ask you what to choose. After that, will be the computer who will choose";
alert("Please open the console to see the instructions");
console.log(instructions);

function getValue(){
  let value = prompt('Rock, Paper or Scissors?');
  return value;
}

//Computer function
let computerSays = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
  const randomAnswer = Math.floor(Math.random() * 3);
  return computerSays[randomAnswer];
}
// console.log(computerPlay()); function returns what we need

//round function

const playRound = (playerSelection, computerSelection) => {
 alert('Player 1');
 playerSelection = getValue()
 console.log(`Player 1 picked ${playerSelection}`);
 alert('Player 2');
 computerSelection = computerPlay()
 console.log(`Player 2 picked ${computerSelection}`);

 if(playerSelection === computerSelection){
  console.log('It is a tied, both picked same option');
 }else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
  console.log('You win, Rock beats Scissors');
 }else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
  console.log('You win, Paper beats Rock');
 }else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
  console.log('You win, Scissors beats Paper');
 }else{
  console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
 }
}

let playerSelection = '';
computerSelection = '';
playRound()
