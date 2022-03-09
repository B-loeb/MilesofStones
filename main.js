const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;



//keep track of what keys the user presses on keyboard using keyUP and keyDown event Listeners GLOBAL
const keys = [];

//Player1 JS object
const player = {
    x: 50,
    y: 280,
    width: 32,
    height: 36,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
}
//Player2 JS object
const dogmanPlayer = {
    x: 100,
    y: 100,
    width: 64,
    height: 68,
    frameX: 0,
    frameY: 0,
    speed: 12,
    moving: false,
}
//Maiden Player
const playerSprite = new Image();
playerSprite.src = "emaleLead.png";
//Ravenous Dogman
const dogmanSprite = new Image();
dogmanSprite.src = "dogman.png";
//background
const background = new Image();
background.src = "BackgroundSelfDrawMoon.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//PLAYER1 keeps track of which keys are pressed in an array//
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    player.moving = false;
});
//PLAYER2 keeps track of which keys are pressed in an array//
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    dogmanPlayer.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    dogmanPlayer.moving = false;
});
//Controls for player1//
function movePlayer() {
    //move up
    if (keys[38] && player.y > 250) {
        player.y -= player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    //move left
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    //move down
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    //move right
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 1;
        player.moving = true;
    }
}
function handlePlayerFrame() {
    if (player.frameX < 2 && player.moving) player.frameX++;
    else player.frameX = 0;
}
let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}
//animation loop
function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY,
            player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        handlePlayerFrame();
    }
}
startAnimation(13)









//keeps track of which keys are pressed in an array//
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    dogmanPlayer.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    dogmanPlayer.moving = false;
});
