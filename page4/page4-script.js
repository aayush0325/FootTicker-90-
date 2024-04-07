let teamAName = localStorage.getItem('teamAName');
let teamBName = localStorage.getItem('teamBName');
let teamSize = localStorage.getItem('teamSize');
let matchLength = localStorage.getItem('matchLength');

teamSize = parseInt(teamSize)
matchLength = parseInt(matchLength)


let teamAPlayers = localStorage.getItem('teamAPlayers')
let teamBPlayers = localStorage.getItem('teamBPlayers')

//adding clock functionality 
const clock = document.getElementById('game-clock')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let minutes = 0;
let seconds = 0;
let timer = null
console.log(clock,start,stop,reset)

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
})

function gameClockStop(){
    clearInterval(timer)
}

 stop.addEventListener('click', () => {
    gameClockStop()
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
})