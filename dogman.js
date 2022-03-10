document.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    class Game {
        constructor(ctx, width, height){
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
            this.enemyInterval =  1000;
            this.enemyTimer = 0
            console.log(this.enemies)
        }
        update(deltaTime){
            this.enemies = this.enemies.filter(object => !objectMarkedForDeletion);
            if(this.enemyTimer > this.enemyInterval){
                this.#addNewEnemy();
                this.enemyTimer = 0;
            }else{
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(object => object.update())
        }
        draw(){
            this.enemies.forEach(object => object.draw(this.ctx));
        }
        #addNewEnemy(){
            this.enemies.push(new this.#addNewEnemy(this));
        }
    }
    class Enemy {
        constructor(game){
            this.game = game;
            this.x = this.game.width;
            this.y = Math.random() * this.game.height;
            this.width = 100;
            this.height = 100;
            this.markedForDeletion = false;
            const dogman = {
                x: 100,
                y: 100,
                width: 64,
                height: 68,
                frameX: 0,
                frameY: 0,
                speed: 12,
                moving: false,
            }
        }
        update(){
            this.x--;
            //remove a enemy that goes out of bounds
            if (this.x < 0 - this.width) this.markedForDeletion = true;
        }
        draw(ctx){
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 1;
    function animate(timeStamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update();
        game.draw();
        //somecode lolz
        requestAnimationFrame(animate)
    }
}) animate(0)