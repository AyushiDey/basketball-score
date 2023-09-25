let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let sHome = 0;
let sGuest = 0;

function homeIncrementBy1() {
    sHome += 1;
    scoreHome.textContent = sHome;
}

function homeIncrementBy2() {
    sHome += 2;
    scoreHome.textContent = sHome;
}

function homeIncrementBy3() {
    sHome += 3;
    scoreHome.textContent = sHome;
}

function guestIncrementBy1() {
    sGuest += 1;
    scoreGuest.textContent = sGuest;
}

function guestIncrementBy2() {
    sGuest += 2;
    scoreGuest.textContent = sGuest;
}

function guestIncrementBy3() {
    sGuest += 3;
    scoreGuest.textContent = sGuest;
}