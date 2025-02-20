let currentHomeScore = 0;
let currentGuestScore = 0;

const homeScoreElement = document.getElementById("homeScore");
const guestScoreElement = document.getElementById("guestScore"); 

homeScoreElement.textContent = 0;
guestScoreElement.textContent = 0;

const buttonsArray = document.querySelectorAll(".scoreButton");
console.log(buttonsArray);

for(let i = 0; i < buttonsArray.length; i++) {
    let team = buttonsArray[i].classList.contains("homeButton") ? "home" : "guest";
    
    let points = buttonsArray[i].classList.contains("onePoint") ? 1
    : buttonsArray[i].classList.contains("twoPoint") ? 2
    : 3;

    buttonsArray[i].addEventListener("click", () => updatePoints(points, team));

}

function updatePoints(points, team) {
    if (team === "home") {
        currentHomeScore += points;
        homeScoreElement.textContent = currentHomeScore;
    } else {
        currentGuestScore += points;
        guestScoreElement.textContent = currentGuestScore;
    }
}