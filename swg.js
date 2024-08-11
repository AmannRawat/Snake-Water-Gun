var num = Math.floor(Math.random() * 100 + 1)
console.log(num)
if (num < 35) {
    var output = "Snake";
}
else if (num > 70) {
    var output = "Water";
}
else {
    var output = "Gun";
}
console.log(output);

var snake = document.getElementById("img1")
snake.addEventListener("click", () => {
    var input = "Snake"
    console.log(input);
    return input
})
var water = document.getElementById("img2")
water.addEventListener("click", () => {
    var input = "Water"
    console.log(input);
    return input
})
var gun = document.getElementById("img3")
gun.addEventListener("click", () => {
    var input = "Gun"
    console.log(input);
    return input
})
var btn=document.getElementById('btn');
btn.addEventListener("click", (input,output) => {
    if (input == "Snake" && output == "Water" || input == "Water" && output == "Gun" || input == "Gun" && output == "Snake") {
        alert("You Win")
    }
    else if (input == "Snake" && output == "Gun" || input == "Water" && output == "Snake" || input == "Gun" && output == "Water") {
        alert("You loose")
    }
    else if (input == output) {
        alert("Draw")
    }
    else {
        alert("Enter Valid input")
        console.log(input);     
        console.log(output);     
    }
})
