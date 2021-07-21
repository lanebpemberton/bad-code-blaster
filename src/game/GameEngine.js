import Scale from "./Scale";
import Player from "./Player";

class GameEngine {
    constructor()
    {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.player = null;
      this.leftPressed = false;
      this.rightPressed = false;
      this.initialize();
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
      //this.startEngine();
    }

    assignPlayerControls()
    {
      document.addEventListener("keydown", this.controllerKeyDown.bind(this), false);
      document.addEventListener("keyup", this.controllerKeyUp.bind(this), false);
    }

    controllerKeyDown(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.leftPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.rightPressed = true;
      }
    }

    controllerKeyUp(e)
    {
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.leftPressed = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.rightPressed = false;
      }
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

      if(this.leftPressed) 
      {
        this.player.x += 3;
        console.log("x coord: " + (this.player.x + this.player.width));
        console.log("canvas width: " + (this.canvas.width));
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
    }

}

export default GameEngine;