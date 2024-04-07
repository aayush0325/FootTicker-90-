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


//adding clock functionality started
let canChangeValues = false
const clock = document.getElementById('game-clock')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let minutes = 0;
let seconds = 0;
let timer = null

gameClock = () => {
    seconds++;
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
})

//clock functionality finished

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
    if(canChangeValues){
        goalsByA++;
        displayAGoals.textContent = `${goalsByA}`
    }
})

aGoalsSubtract.addEventListener('click', () => {
    if(canChangeValues)
    {
        goalsByA--;
        displayAGoals.textContent = `${goalsByA}`
    }
})

bGoalsAdd.addEventListener('click', () => {
    if(canChangeValues){
        goalsByB++;
        displayBGoals.textContent = `${goalsByB}`
    }
})

bGoalsSubtract.addEventListener('click', () => {
    if(canChangeValues)
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
