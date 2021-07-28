import Scale from "./Scale";
import Player from "./Player";
import {isMobile} from 'react-device-detect';
import MobileController from "./MobileController";
import Background from "./Background";
import Enemy from "./Enemy";

class GameEngine {
    constructor()
    {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.player = null;
      this.enemies = [];
      this.leftPressed = false;
      this.rightPressed = false;
      this.firePressed = false;
      this.mobileController = null;
      this.running = false;
      this.initialize();
      //get instance of background after canvas is scaled!
      this.background = new Background(this.canvas, this.ctx);
      //request fullscreen
      //this.canvas.addEventListener("click",this.requestFullScreen.bind(this))
    }

    initialize()
    {
      //set correct scale of game canvas
      Scale(this.canvas,this.ctx);
      //setup event handlers for keyboard input
      this.assignPlayerControls();
      //initialize player
      this.player = new Player(this.canvas, this.ctx);
      this.player.draw();
      //start game engine running every 10 milliseconds
      setInterval(this.runEngine.bind(this),10);
      this.startEngine();
    }

    requestFullScreen()
    {
      if(this.canvas.webkitRequestFullScreen)
      {
        this.canvas.webkitRequestFullScreen();
      }
      else if(this.canvas.mozRequestFullScreen)
      {
        this.canvas.mozRequestFullScreen();
      }  
    }

    assignPlayerControls()
    {
      //setup controls based on device
      if(isMobile)
      {
        this.mobileController = new MobileController(this.canvas, this.ctx);
      }else
      {
        document.addEventListener("keydown", this.controllerKeyDown.bind(this), false);
        document.addEventListener("keyup", this.controllerKeyUp.bind(this), false);
      }
    }

    controllerKeyDown(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.leftPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.rightPressed = true;
      }else if(e.code === 'Space')
      {
        this.firePressed = true;
      }
    }

    controllerKeyUp(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.leftPressed = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.rightPressed = false;
      }else if(e.code === 'Space')
      {
        this.firePressed = false;
      }
    }

    startEngine()
    {
      this.running = true;
    }

    stop()
    {
      this.running = false;
    }

    runEngine()
    {
      //reset view before redraw
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.background.draw();
      this.player.draw();
      if(isMobile)
      {
        this.mobileController.draw();
        if(this.mobileController.joystick.x>this.mobileController.joystick.originalX)
        {
          this.leftPressed = true;
        }else if(this.mobileController.joystick.x<this.mobileController.joystick.originalX)
        {
          this.rightPressed = true;
        }
        if(this.mobileController.fireButton.pressed)
        {
          this.firePressed = true;
        }
      }

      if (this.running)
      {

        //Player movement
        if(this.leftPressed) 
        {
          this.player.x += 3;
          if (this.player.x + this.player.width > this.canvas.width)
          {
            this.player.x = this.canvas.width - this.player.width;
          }
        }
        else if(this.rightPressed)
        {
          this.player.x -= 3;
          if (this.player.x < 0)
          {
            this.player.x = 0;
          }
        }
        //Draw enemies - RNG to append enemies to rendering array
        const chanceToSpawn = 0.03
        const spawnRoll = Math.random()

        if (chanceToSpawn >= spawnRoll && this.enemies.length < 1) {
          // add enemy to array
          this.enemies.push(new Enemy(this.canvas, this.ctx))
        }
        //Update Enemies - start at back so managing the current index and size is simpler
        for(let enemyIndex = this.enemies.length - 1; enemyIndex >= 0; enemyIndex--) {
          const enemy = this.enemies[enemyIndex]
          const enemyReachedBottom = !enemy.update()

          if (enemyReachedBottom) {
            // handle enemy reaching bottom
            this.enemies.splice(enemyIndex, 1)
            
            if (this.onGameOver) {
              this.onGameOver()
            }
          }
        }

        //Bullet handling
        if(this.player.bulletsFired.length>0)
        {
          //update bullets
          for(let a = 0;a<this.player.bulletsFired.length;a++)
          {
            const bullet = this.player.bulletsFired[a]
            //update individual bullet position
            let bulletUpdate = this.player.bulletsFired[a].update();
            //check result of update
            if(!bulletUpdate)
            {
              //destroy bullet
              this.player.destroyBullet(a);
            } else {
              // check if any enemy overlaps with this.player.bulletsFired[a]
              const enemyHit = this.enemies.findIndex(enemy => enemy.collidesWith(bullet)) 

              if (enemyHit > -1) {
                this.enemies.splice(enemyHit, 1)
                this.player.enemies_killed++;
                if (this.onEnemyKilled) {
                  this?.onEnemyKilled()
                }
              }
            }
          } 
        }
        if(this.firePressed)
        {
          this.player.fire();
        }


        if(isMobile)
        {
          this.rightPressed = false;
          this.leftPressed = false;
          this.mobileController.fireButton.pressed = false;
        }
        this.firePressed = false;
        }
      }
}

export default GameEngine;