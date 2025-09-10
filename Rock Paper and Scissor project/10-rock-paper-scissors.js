let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/


let intervalID;
const Autoplay = document.querySelector('.auto-play-button');

 const autoPlay = () => {
  if(Autoplay.textContent === 'Auto play'){
  intervalID = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000)
  Autoplay.textContent = 'stop playing'}
  else if (Autoplay.textContent === 'stop playing') {
    clearInterval(intervalID);
    Autoplay.innerHTML = 'Auto play'
  }
 }

 const beforeReset = () => {
  let accumulator1 = 0;
  let accumulator2 = 0;
  let accumulator3 = 0;
  if (score.wins === 0) {
     accumulator1++;
  }
   if (score.losses === 0 ) {
    accumulator2++
  } 
   if (score.ties === 0){
    accumulator3++
  }
  const accumulator =  accumulator1 + accumulator2 + accumulator3;
  console.log(accumulator)
  if ( accumulator < 3 ) {
    document.querySelector('.warning-message').innerHTML =
'<p>Are you sure you want to reset the score? <button class="yes-button" style="margin-left:10px;">Yes</button> <button class="no-button">No</button></p>' 
document.querySelector('.yes-button').addEventListener('click',() => {
  Reseting();
 document.querySelector('.warning-message').innerHTML ='';
})
document.querySelector('.no-button').addEventListener('click',() => {
  document.querySelector('.warning-message').innerHTML ='';
})
  } else {
  // i want to make this line of text disappear after some second
    
  }
 }

 function Reseting(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
 }

 document.querySelector('.reset-score-button').addEventListener('click', () => {
beforeReset();
 })

 document.querySelector('.paper-js').addEventListener('click', () => {
  playGame('paper')
 })

 document.querySelector('.rock-js').addEventListener('click', () => {
  playGame('rock')
 })


 document.querySelector('.scissors-js').addEventListener('click', () => {
  playGame('scissors')
 })

 document.querySelector('.auto-play-button').addEventListener('click', () => {
  autoPlay();
 });

 document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock')
  }
  else if (event.key === 'p') {
    playGame('paper')
  }     
  else if (event.key === 's') {
    playGame('scissors')
  }  
  else if (event.key === 'a'){
    autoPlay();
  } 
  else if (event.key === 'Backspace') {
    beforeReset();
  }
 } )

 
 


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
