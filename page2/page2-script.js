let matchLength = "";
let teamSize = "";
let teamAName = "";
let teamBName = "";

const playerButtons = document.querySelectorAll('.player-buttons button');
const durationButtons = document.querySelectorAll('.duration-buttons button');
const teamInputs = document.querySelectorAll('.teamname input');

playerButtons.forEach((playerButton) => {
    playerButton.addEventListener('click', function() {       
        
        playerButtons.forEach((button) =>{
            button.style.backgroundColor = 'white';
        })
        playerButton.style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        teamSize = playerButton.textContent.trim();
        localStorage.setItem('teamSize',teamSize);
        
    });
});


durationButtons.forEach((durationButton) => {
    durationButton.addEventListener('click', function() {
        durationButtons.forEach((button) =>{
            button.style.backgroundColor = 'white';
        })
        durationButton.style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        matchLength = durationButton.textContent.trim();
        localStorage.setItem('matchLength',matchLength)
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function() {
        window.location.href = '../page3/page3.html';
    });
});
