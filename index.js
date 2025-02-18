let currentHomeScore = 0;
let currentGuestScore = 0;

const homeScoreElement = document.getElementById("homeScore");
const guestScoreElement = document.getElementById("guestScore"); 

homeScoreElement.textContent = 0;
guestScoreElement.textContent = 0;

function pointHome(points) {
    currentHomeScore += points;
    homeScoreElement.textContent = currentHomeScore;
}

function pointGuest(points) {
    currentGuestScore += points;
    guestScoreElement.textContent = currentGuestScore;
}