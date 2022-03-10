const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

window.confirm("Begin Game?", "Cancel")

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
    speed: 12,
    moving: false,
}


//Player2 JS object
const dogman = {
    x: 700,
    y: 200,
    width: 64,
    height: 68,
    frameX: 0,
    frameY: 0,
    speed: 7,
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

//tracks which keys are pressed in an array//
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    player.moving = false;
});
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    dogman.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    dogman.moving = false;
});

//Controls for player//
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
//Controls for Dogman//
function moveDogman() {
    //move up
    if (keys[87] && dogman.y > 250) {
        dogman.y -= dogman.speed;
        dogman.frameY = 0;
        dogman.moving = true;
    }
    //move left
    if (keys[65] && dogman.x > 0) {
        dogman.x -= dogman.speed;
        dogman.frameY = 1;
        dogman.moving = true;
    }
    //move down
    if (keys[83] && dogman.y < canvas.height - dogman.height) {
        dogman.y += dogman.speed;
        dogman.frameY = 2;
        dogman.moving = true;
    }
    //move right
    if (keys[68] && dogman.x < canvas.width - dogman.width) {
        dogman.x += dogman.speed;
        dogman.frameY = 3;
        dogman.moving = true;
    }
}
function handleDogmanFrame() {
    if (dogman.frameX < 8 && dogman.moving) dogman.frameX++;
    else dogman.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
    fpsInterval = 1000/ fps;
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
        drawSprite(dogmanSprite, dogman.width * dogman.frameX, dogman.height * dogman.frameY,
                dogman.width, dogman.height, dogman.x, dogman.y, dogman.width, dogman.height);
        movePlayer();
        moveDogman();
        handlePlayerFrame();
        handleDogmanFrame();
       
    }
}
startAnimation(13)
