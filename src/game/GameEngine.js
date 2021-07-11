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
      assignPlayerControls();
    }

    assignPlayerControls()
    {
      document.addEventListener("keydown", this.controllerKeyDown, false);
      document.addEventListener("keyup", this.controllerKeyUp, false);
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
        this.ctx.arc(this.playerX, this.canvas.height-this.playerRadius, this.playerRadius, 0, Math.PI*2, false);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }

    runEngine()
    {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}



export default GameEngine;