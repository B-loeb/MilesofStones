const dogmanSprite = new Image();
dogmanSprite.src = "dogman.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//keeps track of which keys are pressed in an array//
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    dogmanPlayer.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    dogmanPlayer.moving = false;
});

//Controls for player2//
function moveDogman() {
    //move up W
    if (keys[87] && dogmanPlayer.y > 250) {
        dogmanPlayer.y -= dogmanPlayer.speed;
        dogmanPlayer.frameY = 0;
        dogmanPlayer.moving = true;
    }
    //move left A
    if (keys[65] && dogmanPlayer.x > 0) {
        dogmanPlayer.x -= dogmanPlayer.speed;
        dogmanPlayer.frameY = 1;
        dogmanPlayer.moving = true;
    }
    //move down S
    if (keys[83] && dogmanPlayer.y < canvas.height - dogmanPlayer.height) {
        dogmanPlayer.y += dogmanPlayer.speed;
        dogmanPlayer.frameY = 2;
        dogmanPlayer.moving = true;
    }
    //move right D
    if (keys[68] && dogmanPlayer.x < canvas.width - dogmanPlayer.width) {
        dogmanPlayer.x += dogmanPlayer.speed;
        dogmanPlayer.frameY = 3;
        dogmanPlayer.moving = true;
    }
}
function handleDogmanFrame() {
    if (dogmanPlayer.frameX < 8 && dogmanPlayer.moving) dogmanPlayer.frameX++;
    else dogmanPlayer.frameX = 0;
}



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
        drawSprite(dogmanSprite, player.width * player.frameX, player.height * player.frameY,
            player.width, player.height, player.x, player.y, player.width, player.height);
       
        moveDogman();
        handleDogmanFrame();
    }
}
startAnimation(10)