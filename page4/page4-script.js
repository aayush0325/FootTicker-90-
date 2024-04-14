//importing saved vairables from local storage
let teamAName = localStorage.getItem('teamAName');
let teamBName = localStorage.getItem('teamBName');
let teamSize = localStorage.getItem('teamSize');
let matchLength = localStorage.getItem('matchLength');
teamSize = parseInt(teamSize)
matchLength = parseInt(matchLength)
let teamAPlayers = localStorage.getItem('teamAPlayers')
let teamBPlayers = localStorage.getItem('teamBPlayers')
teamAPlayersArray = teamAPlayers.split(",")
teamBPlayersArray = teamBPlayers.split(",")
//changing team titles
teamAHTML = document.querySelector('.team-name-a h1')
teamBHTML = document.querySelector('.team-name-b h1')
teamAHTML.textContent = `${teamAName}`
teamBHTML.textContent = `${teamBName}`
//finished changing team titles

//lineups
for(let i = 0 ; i < teamSize ; i++){
    const lineupA = document.querySelector('.team-a-lineup ul')
    const lineupB = document.querySelector('.team-b-lineup ul')
    let listItemA = document.createElement('li')
    listItemA.innerText = `${i+1}. ${teamAPlayersArray[i]}`
    lineupA.appendChild(listItemA)
    let listItemB = document.createElement('li')
    listItemB.innerText = `${i+1}. ${teamBPlayersArray[i]}`
    lineupB.appendChild(listItemB)
}
//lineups ended

//possession functionality + clock functionality
let timeWithBallA = 0
let timeWithBallB = 0
let hasTheBallA = false
let hasTheBallB = false
let possessionPercentA = 50
let possessionPercentB = 50
const displayPossessionPercentA = document.querySelector('.possession-a-percent h5')
const displayPossessionPercentB = document.querySelector('.possession-b-percent h5')
const possessionButtonA = document.querySelector('.possession-a')
const possessionButtonB = document.querySelector('.possession-b')

possessionButtonA.addEventListener('click', () => {
    possessionButtonA.style.backgroundColor = 'green'
    possessionButtonB.style.backgroundColor = 'white'
    possessionButtonA.style.color = 'white'
    possessionButtonB.style.color = 'black'
    hasTheBallA = true
    hasTheBallB = false
})

possessionButtonB.addEventListener('click', () => {
    possessionButtonB.style.backgroundColor = 'green'
    possessionButtonA.style.backgroundColor = 'white'
    possessionButtonB.style.color = 'white'
    possessionButtonA.style.color = 'black'
    hasTheBallB = true
    hasTheBallA = false
})

let canChangeValues = false
const clock = document.getElementById('game-clock')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let minutes = 0;
let seconds = 0;
let timer = null

gameClock = () => {
    if(minutes === matchLength) {
        gameClockStop()
        clock.innerHTML = minutes1+1 + ':' + '00';
        return
        
    }
    if(hasTheBallA){
        timeWithBallA++;
    }
    if(hasTheBallB){
        timeWithBallB++;
    }
    seconds++;
    possessionPercentA = (timeWithBallA*100)/(timeWithBallA+timeWithBallB)
    possessionPercentB = (timeWithBallB*100)/(timeWithBallA+timeWithBallB)
    possessionPercentA = Math.round(possessionPercentA)
    possessionPercentB = 100-possessionPercentA
    if(possessionPercentB === 0)
    {
        possessionPercentB = ''
    }
    localStorage.setItem('possessionPercentA',possessionPercentA)
    localStorage.setItem('possessionPercentB',possessionPercentB)
    displayPossessionPercentA.textContent = `${possessionPercentA}`
    displayPossessionPercentB.textContent = `${possessionPercentB}`
    let widthOfA = 6*possessionPercentA
    let widthOfB = 6*possessionPercentB
    displayPossessionPercentA.style.width = `${widthOfA}` + 'px'
    displayPossessionPercentB.style.width = `${widthOfB}` + 'px'
    if(seconds === 60)
    {
        seconds = 0;
        minutes++;
    }
    minutes1 = minutes.toString().padStart(2,0)
    seconds1 = seconds.toString().padStart(2,0)
    clock.innerHTML = minutes1 + ':' + seconds1;
}

function gameClockStart(){
    if(timer!==null)
    {
        clearInterval(timer)
    }
    timer = setInterval(gameClock,1000)
}

start.addEventListener('click', () => {
    if(hasTheBallA || hasTheBallB)
    {
        gameClockStart();
        canChangeValues = true
    }
})

function gameClockStop(){
    clearInterval(timer)
}

stop.addEventListener('click', () => {
    gameClockStop()
    canChangeValues = false
})


function gameClockReset(){
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    minutes1 = minutes.toString().padStart(2,0)
    seconds1 = seconds.toString().padStart(2,0)
    clock.innerHTML = minutes1 + ':' + seconds1;
}

reset.addEventListener('click', () => {
    gameClockReset();
    canChangeValues = false
    hasTheBallA = false
    hasTheBallB = false
    possessionPercentA = 50
    possessionPercentB = 50
    timeWithBallA = 0
    timeWithBallB = 0
    possessionButtonA.style.backgroundColor = 'white'
    possessionButtonA.style.color = 'black'
    possessionButtonB.style.backgroundColor = 'white'
    possessionButtonB.style.color = 'black'
    displayPossessionPercentA.style.width = '300px'
    displayPossessionPercentB.style.width = '300px'
    displayPossessionPercentA.textContent = `50`
    displayPossessionPercentB.textContent = `50`
    goalScorersA = []
    timesGoalScoredA = []
    goalScorersB = []
    timesGoalScoredB = []

})
//clock functionality finished // posession functionality also finished

//goals adding and subtracting
const aGoalsAdd = document.querySelector('.a-plus')
const aGoalsSubtract = document.querySelector('.a-minus')
const bGoalsAdd = document.querySelector('.b-plus')
const bGoalsSubtract = document.querySelector('.b-minus')
const displayAGoals = document.querySelector('.number-of-goals-a h1')
const displayBGoals = document.querySelector('.number-of-goals-b h1')
let goalsByA = 0
let goalsByB = 0

aGoalsAdd.addEventListener('click', () => {
    if(canChangeValues && hasTheBallA){
        goalsByA++;
        displayAGoals.textContent = `${goalsByA}`
    }
})

bGoalsAdd.addEventListener('click', () => {
    if(canChangeValues && hasTheBallB){
        goalsByB++;
        displayBGoals.textContent = `${goalsByB}`
    }
})

reset.addEventListener('click', () => {
    goalsByB = 0;
    displayBGoals.textContent = `${goalsByB}`
    goalsByA = 0;
    displayAGoals.textContent = `${goalsByA}`
})
//goals adding and subtracting finished


let goalScorersA = []
let timesGoalScoredA = []
let goalScorersB = []
let timesGoalScoredB = []

let teamAYelllowCardsArray = Array(teamSize).fill(0)
let teamBYelllowCardsArray = Array(teamSize).fill(0)
let canDisplayCheckA = Array(teamSize).fill(true)
let canDisplayCheckB = Array(teamSize).fill(true)



const displayAInjuries = document.querySelector('.team-a-injuries h4');
const displayBInjuries = document.querySelector('.team-b-injury h4');
const aInjuriesAdd = document.querySelector('.a-injury-add');
const bInjuriesAdd = document.querySelector('.b-injury-add');
let injuriesByA = 0;
let injuriesByB = 0;

aInjuriesAdd.addEventListener('click', () => {
    if (canChangeValues) {
        injuriesByA++;
        displayAInjuries.innerText = `${injuriesByA}`;
    }
});


bInjuriesAdd.addEventListener('click', () => {
    if (canChangeValues) {
        injuriesByB++;
        displayBInjuries.innerText = `${injuriesByB}`;
    }
});

const displayAYellowCards = document.querySelector('.team-a-yellow-cards h4');
const displayBYellowCards = document.querySelector('.team-b-yellow-cards h4');
const aYellowCardsAdd = document.querySelector('.a-yc-add');
const bYellowCardsAdd = document.querySelector('.b-yc-add');
let yellowCardsByA = 0;
let yellowCardsByB = 0;

aYellowCardsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        yellowCardsByA++;
        displayAYellowCards.innerText = `${yellowCardsByA}`;
    }
});


bYellowCardsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        yellowCardsByB++;
        displayBYellowCards.innerText = `${yellowCardsByB}`;
    }
});

const displayARedCards = document.querySelector('.team-a-red-cards h4');
const displayBRedCards = document.querySelector('.team-b-red-cards h4');
const aRedCardsAdd = document.querySelector('.a-rc-add');
const bRedCardsAdd = document.querySelector('.b-rc-add');
let redCardsByA = 0;
let redCardsByB = 0;

function redCardsFuntion(players, checkArray){
    const popup = document.createElement('div')
    const heading = document.createElement('h1')
    heading.style.color = 'white'
    heading.textContent = "Choose who has been given the Red Card";
    popup.appendChild(heading);
    popup.classList.add('red-card-popup');
    for (let i = 0; i < players.length; i++) {
        const button = document.createElement('button');
        button.textContent = players[i];
        button.classList.add('player-button');
        button.addEventListener('click', () => {
            checkArray[i] = false
            popup.remove();
        });
        if(checkArray[i]){
            popup.appendChild(button);
        }
    }
    const backButton = document.createElement('button')
    backButton.textContent = 'Back'
    backButton.classList.add('player-button')
    backButton.addEventListener('click', () => {
        popup.remove();
    })
    document.body.appendChild(popup);
}

aRedCardsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        redCardsByA++;
        displayARedCards.innerText = `${redCardsByA}`;
        redCardsFuntion(teamAPlayersArray,canDisplayCheckA)
    }
});

bRedCardsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        redCardsByB++;
        displayBRedCards.innerText = `${redCardsByB}`;
        redCardsFuntion(teamBPlayersArray,canDisplayCheckB)
    }
});

function createPlayerSelectionPopup(players, goalScorerArr, timeArr, goalScorersList, checkArray1) {
    const popup = document.createElement('div');
    const heading = document.createElement('h1');
    heading.style.color = 'white'
    heading.textContent = "Choose the goal scorer";
    popup.appendChild(heading);
    popup.classList.add('player-popup');
    for (let i = 0; i < players.length; i++) {
        const button = document.createElement('button');
        button.textContent = players[i];
        button.classList.add('player-button');
        button.addEventListener('click', () => {
            goalScorerArr.push(players[i]);
            timeArr.push(minutes + 1);
            console.log(players, goalScorerArr, timeArr);
            popup.remove();
            const displayList = goalScorersList.querySelector('ul');
            const listItem = document.createElement('li');
            listItem.textContent = `${players[i]} ${minutes+1}'`;
            displayList.appendChild(listItem);
        });
        if (checkArray1[i]) {
            popup.appendChild(button);
        }
    }
    document.body.appendChild(popup);
}

aGoalsAdd.addEventListener('click', () => {
    if (canChangeValues && hasTheBallA) {
        createPlayerSelectionPopup(teamAPlayersArray, goalScorersA, timesGoalScoredA, document.querySelector('.team-a-goalscorers'), canDisplayCheckA);
    }
});

bGoalsAdd.addEventListener('click', () => {
    if (canChangeValues && hasTheBallB) {
        createPlayerSelectionPopup(teamBPlayersArray, goalScorersB, timesGoalScoredB, document.querySelector('.team-b-goalscorers'), canDisplayCheckB);
    }
});


aGoalsSubtract.addEventListener('click', () => {
    if (canChangeValues && goalsByA > 0) {
        goalsByA--;
        displayAGoals.textContent = `${goalsByA}`;
        if (goalScorersA.length > 0) {
            goalScorersA.pop();
            timesGoalScoredA.pop();
            const displayList = document.querySelector('.team-a-goalscorers ul');
            displayList.removeChild(displayList.lastChild);
        }
    }
});

bGoalsSubtract.addEventListener('click', () => {
    if (canChangeValues && goalsByB > 0) {
        goalsByB--;
        displayBGoals.textContent = `${goalsByB}`;
        if (goalScorersB.length > 0) {
            goalScorersB.pop();
            timesGoalScoredB.pop();
            const displayList = document.querySelector('.team-b-goalscorers ul');
            displayList.removeChild(displayList.lastChild);
        }
    }
});

reset.addEventListener('click',() =>{
    const liA = document.querySelector('.team-a-goalscorers ul')
    const liB = document.querySelector('.team-b-goalscorers ul')
    liA.innerHTML = ""
    liB.innerHTML = ""
})


const displayAShots = document.querySelector('.team-a-shots h4')
const displayBShots = document.querySelector('.team-b-shots h4')
const aShotsAdd = document.querySelector('.a-shots-plus')
const aShotsSubtract = document.querySelector('.a-shots-minus')
const bShotsAdd = document.querySelector('.b-shots-plus')
const bShotsSubtract = document.querySelector('.b-shots-minus')
let shotsByA = 0
let shotsByB = 0

aShotsAdd.addEventListener('click', () => {
    if(canChangeValues && hasTheBallA){
        shotsByA++
        displayAShots.innerText = `${shotsByA}`    
    }
})

aShotsSubtract.addEventListener('click', () => {
    if(shotsByA>0 && canChangeValues){
        shotsByA--
        displayAShots.innerText = `${shotsByA}`
    }
})

bShotsAdd.addEventListener('click', () => {
    if(canChangeValues && hasTheBallB){
        shotsByB++
        displayBShots.innerText = `${shotsByB}`
    }
})

bShotsSubtract.addEventListener('click', () => {
    if(shotsByB>0 && canChangeValues){
        shotsByB--
        displayBShots.innerText = `${shotsByB}`
    }
})


const displayACorners = document.querySelector('.team-a-corners h4')
const displayBCorners = document.querySelector('.team-b-corners h4')
const aCornersAdd = document.querySelector('.a-corners-add')
const aCornersSubtract = document.querySelector('.a-corners-subtract')
const bCornersAdd = document.querySelector('.b-corners-add')
const bCornersSubtract = document.querySelector('.b-corners-subtract')
let cornersByA = 0
let cornersByB = 0

aCornersAdd.addEventListener('click', () => {
    if(canChangeValues){
        cornersByA++
        displayACorners.innerText = `${cornersByA}`
    }
})

aCornersSubtract.addEventListener('click', () => {
    if(canChangeValues && cornersByA >0){
        cornersByA--
        displayACorners.innerText = `${cornersByA}`
    }
})

bCornersAdd.addEventListener('click', () => {
    if(canChangeValues){
        cornersByB++
        displayBCorners.innerText = `${cornersByB}`
    }
})

bCornersSubtract.addEventListener('click', () => {
    if(canChangeValues && cornersByB >0){
        cornersByB--
        displayBCorners.innerText = `${cornersByB}`
    }
})

const displayAFouls = document.querySelector('.team-a-fouls h4');
const displayBFouls = document.querySelector('.team-b-fouls h4');
const aFoulsAdd = document.querySelector('.a-fouls-add');
const aFoulsSubtract = document.querySelector('.a-fouls-subtract');
const bFoulsAdd = document.querySelector('.b-fouls-add');
const bFoulsSubtract = document.querySelector('.b-fouls-subtract');
let foulsByA = 0;
let foulsByB = 0;

aFoulsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        foulsByA++;
        displayAFouls.innerText = `${foulsByA}`;
    }
});

aFoulsSubtract.addEventListener('click', () => {
    if (canChangeValues && foulsByA > 0) {
        foulsByA--;
        displayAFouls.innerText = `${foulsByA}`;
    }
});

bFoulsAdd.addEventListener('click', () => {
    if (canChangeValues) {
        foulsByB++; 
        displayBFouls.innerText = `${foulsByB}`;
    }
});

bFoulsSubtract.addEventListener('click', () => {
    if (canChangeValues && foulsByB > 0) {
        foulsByB--;
        displayBFouls.innerText = `${foulsByB}`;
    }
});


const displayATackles = document.querySelector('.team-a-tackles h4');
const displayBTackles = document.querySelector('.team-b-tackles h4');
const aTacklesAdd = document.querySelector('.a-tackles-add');
const aTacklesSubtract = document.querySelector('.a-tackles-subtract');
const bTacklesAdd = document.querySelector('.b-tackles-add');
const bTacklesSubtract = document.querySelector('.b-tackles-subtract');
let tacklesByA = 0;
let tacklesByB = 0;

aTacklesAdd.addEventListener('click', () => {
    if (canChangeValues) {
        tacklesByA++;
        displayATackles.innerText = `${tacklesByA}`;
    }
});

aTacklesSubtract.addEventListener('click', () => {
    if (canChangeValues && tacklesByA > 0) {
        tacklesByA--;
        displayATackles.innerText = `${tacklesByA}`;
    }
});

bTacklesAdd.addEventListener('click', () => {
    if (canChangeValues) {
        tacklesByB++;
        displayBTackles.innerText = `${tacklesByB}`;
    }
});

bTacklesSubtract.addEventListener('click', () => {
    if (canChangeValues && tacklesByB > 0) {
        tacklesByB--;
        displayBTackles.innerText = `${tacklesByB}`;
    }
});


reset.addEventListener('click', () => {
    shotsByA = 0;
    shotsByB = 0;
    displayAShots.innerText = '0';
    displayBShots.innerText = '0';

    cornersByA = 0;
    cornersByB = 0;
    displayACorners.innerText = '0';
    displayBCorners.innerText = '0';

    foulsByA = 0;
    foulsByB = 0;
    displayAFouls.innerText = '0';
    displayBFouls.innerText = '0';

    tacklesByA = 0;
    tacklesByB = 0;
    displayATackles.innerText = '0';
    displayBTackles.innerText = '0';

    injuriesByA = 0;
    injuriesByB = 0;
    displayAInjuries.innerText = '0';
    displayBInjuries.innerText = '0';

    yellowCardsByA = 0;
    yellowCardsByB = 0;
    displayAYellowCards.innerText = '0';
    displayBYellowCards.innerText = '0';

    redCardsByA = 0;
    redCardsByB = 0;
    displayARedCards.innerText = '0';
    displayBRedCards.innerText = '0';
});

