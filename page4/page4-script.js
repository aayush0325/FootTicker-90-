//importing saved vairables from local storage
let teamAName = localStorage.getItem('teamAName');
let teamBName = localStorage.getItem('teamBName');
let teamSize = localStorage.getItem('teamSize');
let matchLength = localStorage.getItem('matchLength');
teamSize = parseInt(teamSize)
matchLength = parseInt(matchLength)
let teamAPlayers = localStorage.getItem('teamAPlayers')
let teamBPlayers = localStorage.getItem('teamBPlayers')



//changing team titles
teamAHTML = document.querySelector('.team-name-a h1')
teamBHTML = document.querySelector('.team-name-b h1')
teamAHTML.textContent = `${teamAName}`
teamBHTML.textContent = `${teamBName}`
//finished changing team titles

//possession functionality + clock functionality
let timeWithBallA = 0
let timeWithBallB = 0
let hasTheBallA = false
let hasTheBallB = false

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
let posessionPercentA = 50
let possessionPercentB = 50


gameClock = () => {
    if(hasTheBallA){
        timeWithBallA++;
    }
    if(hasTheBallB){
        timeWithBallB++;
    }
    seconds++;
    posessionPercentA = (timeWithBallA*100)/(timeWithBallA+timeWithBallB)
    possessionPercentB = (timeWithBallB*100)/(timeWithBallA+timeWithBallB)
    posessionPercentA = Math.round(posessionPercentA)
    possessionPercentB = 100-posessionPercentA
    console.log(posessionPercentA,possessionPercentB)
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
    gameClockStart();
    canChangeValues = true
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
    posessionPercentA = 50
    possessionPercentB = 50
    timeWithBallA = 0
    timeWithBallB = 0
    possessionButtonA.style.backgroundColor = 'white'
    possessionButtonA.style.color = 'black'
    possessionButtonB.style.backgroundColor = 'white'
    possessionButtonB.style.color = 'black'

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

aGoalsSubtract.addEventListener('click', () => {
    if(canChangeValues && hasTheBallA)
    {
        goalsByA--;
        displayAGoals.textContent = `${goalsByA}`
    }
})

bGoalsAdd.addEventListener('click', () => {
    if(canChangeValues && hasTheBallB){
        goalsByB++;
        displayBGoals.textContent = `${goalsByB}`
    }
})

bGoalsSubtract.addEventListener('click', () => {
    if(canChangeValues && hasTheBallB)
    {
        goalsByB--;
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

