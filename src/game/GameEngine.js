import Scale from "./Scale";
import Player from "./Player";

class GameEngine {
    constructor()
    {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.player = null;
      this.upPressed = false;
      this.downPressed = false;
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
        this.upPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.downPressed = true;
      }
    }

    controllerKeyUp(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.upPressed = false;
    }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.downPressed = false;
      }
    }
    
    drawPlayerOne()
    {
      this.ctx.beginPath();
      this.ctx.arc(15,this.player.y, this.player.radius, 0, Math.PI*2, false);
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fill();
      this.ctx.closePath();
    }

    startEngine()
    {
      setInterval(this.runEngine.bind(this),10);
    }

    runEngine()
    {
      //reset view before redraw
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.draw();
      if(this.upPressed) 
      {
        this.player.y += 3;
        if (this.player.y + this.player.radius > this.canvas.width)
        {
          this.player.y = this.canvas.height - this.player.radius;
        }
      }
      else if(this.downPressed)
      {
        this.player.y -= 3;
          if (this.player.y < 0)
          {
            this.player.y = 0;
          }
      }
    }

}

export default GameEngine;