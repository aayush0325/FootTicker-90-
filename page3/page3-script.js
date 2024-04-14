let teamAName = localStorage.getItem('teamAName');
let teamBName = localStorage.getItem('teamBName');
let teamSize = localStorage.getItem('teamSize');
let matchLength = localStorage.getItem('matchLength');


teamOneName = document.querySelector('.first-team')
teamOneName.textContent = teamAName

teamTwoName = document.querySelector('.second-team')
teamTwoName.textContent = teamBName

teamSize = parseInt(teamSize)
matchLength = parseInt(matchLength)

teamAPlayers = new Array(teamSize).fill('')
teamBPlayers = new Array(teamSize).fill('')


function createPlayerInputs(teamSize, teamPlayersArray) {
    const teamDiv = document.querySelector('.teams');
    for (let i = 0; i < teamSize; i++) {
        const input = document.createElement('input');
        input.style.margin = '10px 50px 10px 50px'; 
        input.style.fontSize = '20px'; 
        input.style.borderRadius = '30px'
        input.style.padding = '5px 10px 5px 10px'
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Enter player name');
        const teamDivClass = (teamPlayersArray === teamAPlayers) ? 'team1' : 'team2';
        const teamContainer = document.querySelector(`.${teamDivClass}`);
        teamContainer.appendChild(input);
    }
}

createPlayerInputs(teamSize, teamAPlayers);
createPlayerInputs(teamSize, teamBPlayers);

const inputA = document.querySelectorAll('.team1 input')
for(let i = 0 ; i < teamSize ; i++)
{
    inputA[i].addEventListener('input', () => {
        let playerAName = inputA[i].value.trim();
        teamAPlayers[i] = playerAName;
        localStorage.setItem('teamAPlayers',teamAPlayers)
    });
}

const inputB = document.querySelectorAll('.team2 input')
for(let i = 0 ; i < teamSize ; i++)
{
    inputB[i].addEventListener('input', () => {
        let playerAName = inputB[i].value.trim();
        teamBPlayers[i] = playerAName;
        localStorage.setItem('teamBPlayers',teamBPlayers)

    });
}

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".play");
    playButton.addEventListener("click", function() {
        window.location.href = "../page4/page4.html";
    });
});
