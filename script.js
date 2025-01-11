let panelBottom = document.querySelector("#panel-bottom");

function Bubblemaker() {
    // let panelBottom = document.querySelector("#panel-bottom");
    let bubbleSaver = "";
    for (let i = 1; i < 127; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubbleSaver = bubbleSaver + `<div class="bubble">${randomNumber}</div>`;
        panelBottom.innerHTML = bubbleSaver

    }
}
Bubblemaker();

let timer = document.querySelector("#timerId");
let time = 60;

function runtimer() {
    let timeint = setInterval(function() {
        if (time > 0) {
            time--;
            timer.textContent = time;
        } else {
            clearInterval(timeint);
            panelBottom.innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
runtimer();


let hitValue = document.querySelector("#hitvalue");
let randomHitvalue;

function randomHitNumber() {
    randomHitvalue = Math.floor(Math.random() * 10);
    hitValue.textContent = randomHitvalue;
}


randomHitNumber();

let scoreValue = document.querySelector("#scorevalue");
let score = 0;

function increaseScore() {
    score += 10;
    scoreValue.textContent = score;
};

//event bubbling
panelBottom.addEventListener("click", function(e) {
    let clickedNumber = Number(e.target.textContent);
    if (randomHitvalue === clickedNumber) {
        increaseScore();
        randomHitNumber();
        Bubblemaker();
    }


})