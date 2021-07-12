import Scale from "./Scale";

class GameEngine {
    constructor()
    {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.playerRadius = 9;
      this.playerX = (this.canvas.width-this.playerRadius)/2;
      this.rightPressed = false;
      this.leftPressed = false;
    }

    initialize()
    {
      //set correct scale of game canvas
      Scale(this.canvas,this.ctx);
      //setup event handlers for keyboard input
      this.assignPlayerControls();
      //start game engine running every 10 milliseconds
      this.startEngine();
    }

    assignPlayerControls()
    {
      document.addEventListener("keydown", this.controllerKeyDown.bind(this), false);
      document.addEventListener("keyup", this.controllerKeyUp.bind(this), false);
    }

    controllerKeyDown(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = true;
      }
    }

    controllerKeyUp(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = false;
    }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = false;
      }
    }

    drawPlayerOne()
    {
      this.ctx.beginPath();
      this.ctx.arc(this.playerX, 20-this.playerRadius, this.playerRadius, 0, Math.PI*2, false);
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fill();
      this.ctx.closePath();
    }

    drawGun()
    {
      this.ctx.beginPath();
      
    }

    startEngine()
    {
      setInterval(this.runEngine.bind(this),10);
    }

    runEngine()
    {
      //reset view before redraw
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawPlayerOne();
      if(this.rightPressed) 
      {
        console.log("right pressed");
        this.playerX += 7;
        if (this.playerX + this.playerRadius > this.canvas.width)
        {
          this.playerX = this.canvas.width - this.playerRadius;
        }
      }
      else if(this.leftPressed)
      {
        this.playerX -= 7;
          if (this.playerX < 0)
          {
            this.playerX = 0;
          }
      }
    }

}

export default GameEngine;