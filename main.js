// Selecting elements.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// Storing the scores.
let computerScore = 0;
let playerScore = 0;

const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors", "fas fa-hand-lizard", "fas fa-hand-spock"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const outcomes = {
  "fas fa-hand-rock": { beats: ["fas fa-hand-scissors", "fas fa-hand-lizard"], color: 'rgb(1, 146, 1)' },
  "fas fa-hand-paper": { beats: ["fas fa-hand-rock", "fas fa-hand-spock"], color: 'rgb(1, 146, 1)' },
  "fas fa-hand-scissors": { beats: ["fas fa-hand-paper", "fas fa-hand-lizard"], color: 'rgb(1, 146, 1)' },
  "fas fa-hand-lizard": { beats: ["fas fa-hand-spock", "fas fa-hand-paper"], color: 'rgb(1, 146, 1)' },
  "fas fa-hand-spock": { beats: ["fas fa-hand-scissors", "fas fa-hand-rock"], color: 'rgb(1, 146, 1)' },
};

const interactions = {
  "fas fa-hand-rock": {
    "fas fa-hand-scissors": "crushes",
    "fas fa-hand-lizard": "crushes"
  },
  "fas fa-hand-paper": {
    "fas fa-hand-rock": "covers",
    "fas fa-hand-spock": "disproves"
  },
  "fas fa-hand-scissors": {
    "fas fa-hand-paper": "cuts",
    "fas fa-hand-lizard": "decapitates"
  },
  "fas fa-hand-lizard": {
    "fas fa-hand-spock": "poisons",
    "fas fa-hand-paper": "eats"
  },
  "fas fa-hand-spock": {
    "fas fa-hand-scissors": "smashes",
    "fas fa-hand-rock": "vaporizes"
  }
};

const setMessage = (message, color, interaction, choice) => {
  text.innerHTML = message;
  text.style.color = color;
  text2.innerHTML = 'Choose again';
  text2.style.color = 'blue';
};

const game = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let clickedBtn = e.target.className;

      showIcon.className = clickedBtn;
      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];
      let computerChoice = computerShowIcon.className;
      let user = clickedBtn.split('-')[2];
      let computer = computerChoice.split('-')[2]

      // Determine the winner
      if (showIcon.className === computerChoice) {
        setMessage("It's a Tie!", 'orange', '', user);
      } else if (outcomes[showIcon.className].beats.includes(computerChoice)) {
        // Player wins
        playerScore++;
        pScore.textContent = playerScore;
        const interactionText = interactions[showIcon.className][computerChoice];
        setMessage(`You Win! ${user} ${interactionText} ${computer}`, outcomes[showIcon.className].color, '', '');
      } else {
        // Computer wins
        computerScore++;
        cScore.textContent = computerScore;
        const interactionText = interactions[computerChoice][showIcon.className];
        setMessage(`You Lost! ${computer} ${interactionText} ${user}`, 'red', '', '');
      }
    });
  });
};

game();
