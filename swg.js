//Generating Random computer choice as Output
var num = Math.floor(Math.random() * 100 + 1)
console.log(num)
let input = ""
let output = ""
if (num < 35) {
    output = "Snake";
    // var comp=document.getElementById
}
else if (num > 70) {
    output = "Water";
}
else {
    output = "Gun";
}
console.log(output);

//Receiving  User choice as Input
var snake = document.getElementById("img1")
snake.addEventListener("click", () => {
    input = "Snake"
    console.log(input);
    return input
})
var water = document.getElementById("img2")
water.addEventListener("click", () => {
    input = "Water"
    console.log(input);
    return input
})
var gun = document.getElementById("img3")
gun.addEventListener("click", () => {
    input = "Gun"
    console.log(input);
    return input
})


//Play Button Giving Results
var btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    if (input == "Snake" && output == "Water" || input == "Water" && output == "Gun" || input == "Gun" && output == "Snake") {
        let win = document.getElementById('win');;
        win.style.display = "block"
    }
    else if (input == "Snake" && output == "Gun" || input == "Water" && output == "Snake" || input == "Gun" && output == "Water") {
        let lose = document.getElementById('lose');;
        lose.style.display = "block"
    }
    else if (input == output) {
        let tie = document.getElementById('tie');;
        tie.style.display = "block"
    }
    else {
        alert("Choose one")
        console.log(input);
        console.log(output);
    }
    setTimeout(() => {
        location.reload();
      }, 2300);
})
