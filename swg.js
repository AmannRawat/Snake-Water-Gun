// Sound Effects
const Game = new Audio('Assets/Sound/Game.mp3');
const clickSound = new Audio('Assets/Sound/ButtonClick.mp3');
const winSound = new Audio('Assets/Sound/Win.mp3');
const loseSound = new Audio('Assets/Sound/loose.mp3');
const tieSound = new Audio('Assets/Sound/tie.mp3');
const snakeSound = new Audio('Assets/Sound/snake.mp3');
const waterSound = new Audio('Assets/Sound/water.mp3');
const GunSound = new Audio('Assets/Sound/Gun.mp3');
const BearSound = new Audio('Assets/Sound/cute.mp3');

document.querySelectorAll(".Bear-S").forEach(item => {
    item.addEventListener("click", function () {
        BearSound.play();
    });
});

//Background music should play after realoding page-->From Chat GPT :)
window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('GameTime');
    if (savedTime) {
        Game.currentTime = savedTime;
    }
    // Start playing when the user interacts with the page
    document.body.addEventListener('click', () => {
        // Game.play();
        Game.loop = true;
    }, { once: true }); // Ensures it only triggers once
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('GameTime', Game.currentTime);
});

//Generating Random computer choice as Output
let input = ""
let output = ""
function CompTurn() {
    var num = Math.floor(Math.random() * 100 + 1)
    console.log(num)
    if (num < 35) {
        return output = "Snake";
        // var comp=document.getElementById
    }
    else if (num > 70) {
        return output = "Water";
    }
    else {
        return output = "Gun";
    }
}

CompTurn()
console.log(output);
//Receiving  User choice as Input
var snake = document.getElementById("img1")
snake.addEventListener("click", () => {
    input = "Snake"
    console.log(input);
    snakeSound.play()
    return input
})
var water = document.getElementById("img2")
water.addEventListener("click", () => {
    input = "Water"
    console.log(input);
    waterSound.play()
    return input
})
var gun = document.getElementById("img3")
gun.addEventListener("click", () => {
    input = "Gun"
    console.log(input);
    GunSound.play()
    return input
})


//Play Button Giving Results
var btn = document.getElementById('btn');
var btn2 = document.getElementById('playAgainBtn');
btn.addEventListener("click", () => {
    clickSound.play();
    if (input == "Snake" && output == "Water" || input == "Water" && output == "Gun" || input == "Gun" && output == "Snake") {
        let win = document.getElementById('win');;
        winSound.play();
        btn2.style.display = "block"
        win.style.display = "block"
        btn.style.left = "59%"
        btn2.style.left = "44%"
        setTimeout(() => {
            btn.style.display = "none"
        }, 750);
    }
    else if (input == "Snake" && output == "Gun" || input == "Water" && output == "Snake" || input == "Gun" && output == "Water") {
        let lose = document.getElementById('lose');
        loseSound.play();
        btn2.style.display = "block"
        lose.style.display = "block"
        btn.style.left = "59%"
        btn2.style.left = "44%"
        setTimeout(() => {
            btn.style.display = "none"
        }, 750);
    }
    else if (input == output) {
        let tie = document.getElementById('tie');
        tieSound.play();
        btn2.style.display = "block"
        tie.style.display = "block"
        btn.style.left = "59%"
        btn2.style.left = "44%"
        setTimeout(() => {
            btn.style.display = "none"
        }, 750);
    }
    else {
        alert("Choose one")
        console.log(input);
        console.log(output);
    }
})

function resetGame() {
    clickSound.play();
    document.getElementById('win').style.display = "none";
    document.getElementById('lose').style.display = "none";
    document.getElementById('tie').style.display = "none";
    btn.style.display = "block"
    btn2.style.display = "none"
    btn.style.left = "0px"
    gameActive = true;
    CompTurn()
    console.log(output);
}

document.getElementById('playAgainBtn').addEventListener('click', resetGame);
