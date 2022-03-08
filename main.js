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

const userSprite = new Image();
userSprite.src = "characterSprite\emaleLead.png";
const background = new Image();
background.src = "assets\Images\BackgroundSelfDrawMoon.png"

//animation loop
function animate(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}
animate()