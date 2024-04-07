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

teamAPlayers = []
teamBPlayers = []


// Function to create input elements and handle player name collection
function createPlayerInputs(teamSize, teamPlayersArray) {
    const teamDiv = document.querySelector('.teams');
    for (let i = 0; i < teamSize; i++) {
        const input = document.createElement('input');
        input.style.margin = '10px 50px 10px 50px'; // Adding margin
        input.style.fontSize = '20px'; // Setting font size
        input.style.borderRadius = '30px'
        input.style.padding = '5px 10px 5px 10px'
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Enter player name');
        input.addEventListener('input', function() {
            // Add the entered player name to the respective team players array
            teamPlayersArray[i] = this.value;
        });
        const teamDivClass = (teamPlayersArray === teamAPlayers) ? 'team1' : 'team2';
        const teamContainer = document.querySelector(`.${teamDivClass}`);
        teamContainer.appendChild(input);
    }
}

// Create input elements for Team A
createPlayerInputs(teamSize, teamAPlayers);

// Create input elements for Team B
createPlayerInputs(teamSize, teamBPlayers);


