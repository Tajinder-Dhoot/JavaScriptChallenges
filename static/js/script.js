// Challenge 1 : Your Age in Days

function ageInDays() {
    let birthYear = prompt('Whats your birth year');
    let totalDays = (2020-birthYear)*365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + totalDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.style.margin = "0px";
    h1.style.padding = "20px";
    h1.appendChild(textAnswer);
    document.getElementById('result-box').appendChild(h1);

}

function reset() {
    document.getElementById('result-box').innerHTML = "";
}

//Challenge 2: image Generator
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('img-gen-box');
    image.src = "https://ichef.bbci.co.uk/news/660/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg";
    div.appendChild(image);
}

function resetCatGenerator() {
    document.getElementById('img-gen-box').innerHTML = "";
}

/***function resetCatGenerator() {
    document.getElementById('img-gen-box').remove ();
}
This function removes the div element on reset. Hence generate button does not work after resetting ***/

// Challenge 3: Rock Paper Scissors
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    //console.log(yourChoice);

    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

// converts random no between 0-1 to integer
function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    return(yourScore);
}

function finalMessage(yourScore) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'}
    } else if (yourScore === 0.5) {
        return {'message': 'Draw!', 'color': 'yellow'}
    } else if(yourScore === 1) {
        return {'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase =  {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove images after clicking
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // adding divs after clicking to show final results
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    humanDiv.id = "user-image-choice";
    botDiv.id = "computer-image-choice";
    messageDiv.id = "result-message";

    //console.log(humanDiv);
    humanDiv.innerHTML = "<img src='"+ imagesDatabase[humanImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px #FB8B24;'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding= 30px;'> "+finalMessage['message']+" </h1>";
    botDiv.innerHTML = "<img src='"+ imagesDatabase[botImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px #d12a2a;'>";
    
    document.getElementById('game-display-box').appendChild(humanDiv);
    document.getElementById('game-display-box').appendChild(messageDiv);
    document.getElementById('game-display-box').appendChild(botDiv);
}

// This function stores initial pictures attributes to restore later
function storeInitialImages() {
    let imageRock = document.createElement('img');
    let imagePaper = document.createElement('img');
    let imageScissors = document.createElement('img');

    imageRock.id = "rock";
    imageRock.src = "https://www.fodors.com/wp-content/uploads/2019/08/rock-stack.jpg";
    imageRock.alt = "Rock";
    imageRock.setAttribute('onclick', 'rpsGame(this)');

    imagePaper.id = "paper";
    imagePaper.src = "https://image.freepik.com/free-photo/top-view-pieces-paper-wooden-table_1232-744.jpg";
    imagePaper.alt = "Paper";
    imagePaper.setAttribute('onclick', 'rpsGame(this)');

    imageScissors.id = "scissors";
    imageScissors.src = "https://images-na.ssl-images-amazon.com/images/I/81TD%2B0Y9f6L._AC_SL1500_.jpg";
    imageScissors.alt = "Scissors";
    imageScissors.setAttribute('onclick', 'rpsGame(this)');


    document.getElementById('game-display-box').appendChild(imageRock);
    document.getElementById('game-display-box').appendChild(imagePaper);
    document.getElementById('game-display-box').appendChild(imageScissors);
}
 // this resets the game user interface
function rpsGameReset() {
    document.getElementById('user-image-choice').remove();
    document.getElementById('result-message').remove();
    document.getElementById('computer-image-choice').remove();

    storeInitialImages();
}

// Challenge 4: Change color of the Buttons
let allButtons = document.getElementById('colorful-buttons').querySelectorAll('button'); // select all buttons of container-4
let copyAllButtons = [];

// keep a copy of initial button colors classes
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
} 

// main function called on changing options
function buttonColorChange(yourOption) {
    console.log(yourOption);
    console.log(yourOption.value);

    let yourOptionValue = yourOption.value;

    if (yourOptionValue==='red') {
        buttonRed();
    }else if (yourOptionValue==='green') {
        buttonGreen();
    } else if (yourOptionValue==='reset') {
        buttonResetColors();
    } else if (yourOptionValue==='random') {
        buttonRandomColors();
    }
}

// this fn changes buttons color to red
function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

// changes color to green
function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonResetColors() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    let randomChoice = choices[Math.floor(Math.random()*4)];
    
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomChoice);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isHit': false,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);



function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        blackjackGame['isHit'] = true;
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    return blackjackGame['cards'][Math.floor(Math.random()*13)]
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        cardImage.setAttribute('id', 'card-image');
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    //showResult(computeWinner());
    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isHit'] = false;
        blackjackGame['isStand'] = false;
        blackjackGame['turnsOver'] = false;
    
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    
        for (i=0; i<yourImages.length; i++) {
            yourImages[i].remove();
        }
    
        for (i=0; i<dealerImages.length; i++) {
            dealerImages[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#blackjack-result').textContent = 'Let\'s Play Again!';
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        
        document.querySelector('#blackjack-result').style.color = '#ffffff';
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        // if adding 11 keeps me below 21, add 11. Otherwise add 1
        if  ((activePlayer['score'] + blackjackGame['cardsMap'][card][1]) <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
     activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    if (blackjackGame['turnsOver'] ===  false && blackjackGame['isHit'] === true) {
        blackjackGame['isStand'] = true;
        
        while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            await sleep(350);
        }
        
        blackjackGame['turnsOver'] = true;
        showResult(computeWinner());
    }
}

// compute winner and return who just won
//uodate the wins losses and draws
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
            blackjackGame['wins']++;
        } else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            blackjackGame['losses']++;
        }  else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
        blackjackGame['losses']++;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === DEALER) {
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You Lost!';
        messageColor = 'red';
        lossSound.play();
    } else {
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        message = 'You Drew!';
        messageColor = 'yellow';
    }
    
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;

}