/* Basic roll functionality
function rolld20() {
    "use strict";
    var d20Roll = Math.floor(Math.random() * 20) + 1;
    d20Result.className = "diceResults tile";
    d20Result.innerHTML = "A roll of " + d20Roll + ".";
}

d20.addEventListener("click", rolld20, false);
*/

/*global alert*/

/* ---------- Subheader ---------- */
var tagLines = [
    "Remember: Dax hacks.",
    "Underpromise and underdeliver. This is the way of the Dax.",
    "Making a pact with a dice demon isn't so bad. Just roll with it."
],
    whichTagLine = Math.floor(Math.random() * tagLines.length),
    subHeader = document.getElementsByClassName("subHeader");

subHeader[0].textContent = tagLines[whichTagLine];



/* ---------- Dax Salutation ---------- */
var date = new Date(),
    time = date.getHours(),
    daxChat = document.getElementsByClassName("daxChat");

if (time < 6) {
    daxChat[0].textContent = '"You cannot be serious. Dice? At this hour? You know I have my own things to do."';
}
if (time >= 6 && time < 12) {
    daxChat[0].textContent = '"Good morning, master. A bit early for dice, I should think, but I am not here to judge."';
}
if (time >= 12 && time < 18) {
    daxChat[0].textContent = '"Good afternoon, master. Shall I start the disappointment for you, then?"';
}
if (time >= 18) {
    daxChat[0].textContent = '"Please tell me you are not planning on pulling an all nighter again. I hate it when you do that."';
}

/* ---------- d20 ---------- */
var d20 = document.getElementById("d20"),
    d20Result = document.getElementById("d20Result");

function rolld20() {
    "use strict";
    var d20Roll = Math.floor(Math.random() * 20) + 1;
    if (d20Roll === 1) {
        daxChat[0].textContent = '"Failure is a part of life, master. Not my life, of course. But yours."';
    }
    if (d20Roll > 1 && d20Roll < 8) {
        daxChat[0].textContent = '"Win some, lose some. Lose most, really."';
    }
    if (d20Roll >= 8 && d20Roll < 13) {
        daxChat[0].textContent = '"Such middling heroism, master! Surely your mediocrity knows no bounds."';
    }
    if (d20Roll >= 13 && d20Roll < 20) {
        daxChat[0].textContent = '"Hmpf. Even a broken clock is right twice a day."';
    }
    if (d20Roll === 20) {
        daxChat[0].textContent = '"As if your ego needed any more coddling."';
    }
    d20Result.className = "diceResults tile";
    d20Result.textContent = "A roll of " + d20Roll + ".";
}

d20.addEventListener("click", rolld20, false);