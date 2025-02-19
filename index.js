let currentHomeScore = 0;
let currentGuestScore = 0;

const homeScoreElement = document.getElementById("homeScore");
const guestScoreElement = document.getElementById("guestScore"); 

homeScoreElement.textContent = 0;
guestScoreElement.textContent = 0;

function updatePoints(points, team) {
    if (team === "home") {
        currentHomeScore += points;
        homeScoreElement.textContent = currentHomeScore;
    } else {
        currentGuestScore += points;
        guestScoreElement.textContent = currentGuestScore;
    }
}