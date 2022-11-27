// "use strict";

let textElem = document.getElementById("clocktext");
let dateE = document.getElementById("date-e");
const targetWidth = 0.9;  // Proportion of full screen width
let curFontSize = 20;  // Do not change

function updateClock() {
    const d = new Date();
    let s = "";
    s += (10 > d.getHours() ? "0" : "") + d.getHours() + ":";
    s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
    s += (10 > d.getSeconds() ? "0" : "") + d.getSeconds();
    textElem.textContent = s;
    setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20);

    // const dt = new Data();
    dateE.textContent = d.toLocaleDateString("nl-NL");

}

function updateTextSize() {
    for (let i = 0; 3 > i; i++) {  // Iterate for better better convergence
        curFontSize *= targetWidth / (textElem.offsetWidth / textElem.parentNode.offsetWidth);
        textElem.style.fontSize = curFontSize + "pt";
    }
}

updateClock();
updateTextSize();
window.addEventListener("resize", updateTextSize);