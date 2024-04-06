// Initializing variables
let matchLength = "";
let teamSize = "";
let teamAName = "";
let teamBName = "";

// Selecting the elements
const playerButtons = document.querySelectorAll('.player-buttons button');
const durationButtons = document.querySelectorAll('.duration-buttons button');
const teamInputs = document.querySelectorAll('.teamname input');




// Adding event listeners to player buttons
playerButtons.forEach((playerButton) => {
    playerButton.addEventListener('click', function() {       
        
        playerButtons.forEach((button) =>{
            button.style.backgroundColor = 'white';
        })
        // Update team size
        playerButton.style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        teamSize = playerButton.textContent.trim();
        localStorage.setItem('teamSize',teamSize);
        
    });
});

// Adding event listeners to duration buttons
durationButtons.forEach((durationButton) => {
    durationButton.addEventListener('click', function() {
        durationButtons.forEach((button) =>{
            button.style.backgroundColor = 'white';
        })
        // Update team size
        durationButton.style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        // Update match duration
        matchLength = durationButton.textContent.trim();
        localStorage.setItem('matchLength',matchLength)
    });
});



// Adding event listener to team name inputs
teamInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.placeholder === 'Team A Name') {
            teamAName = input.value.trim();
            localStorage.setItem('teamAName', teamAName);
        } else if (input.placeholder === 'Team B Name') {
            teamBName = input.value.trim();
            localStorage.setItem('teamBName', teamBName);
        }
    });
});


console.log(matchLength)
console.log(teamSize)