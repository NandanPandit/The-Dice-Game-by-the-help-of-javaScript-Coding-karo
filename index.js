let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceImage = "dice" + randomNumber1 + ".png"; // random image name dice1.png to dice6.png
let randomImageSource = "images/"+ randomDiceImage;//image location

// set image in first player
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// set image in second player
let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/"+ randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// if randomNumber2>randomNumber1 then show result player1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 win.";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 win";
}else{
    document.querySelector("h1").innerHTML = "Die";
}