const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

  
  
//keep track of what keys the user presses on keyboard using keyUP and keyDown event Listeners GLOBAL
const globalKey = [];


//set to JS object
const player = {
    x: 0,
    y: 0,
    width: 32,
    height: 36,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
}

const playerSprite = new Image();
playerSprite.src = "emaleLead.png";
const background = new Image();
background.src = "BackgroundSelfDrawMoon.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


//animation loop
function animate(){
                 // first 0 is x second is y// 
    ctx.clearRect(0, 0,canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, 0, 0, player.width, player.height,
        0, 0, player.height, player.width)
    requestAnimationFrame(animate)
}
animate() 