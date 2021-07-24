import Scale from "./Scale";
import Player from "./Player";
import {isMobile} from 'react-device-detect';
import JoyStick from "./Joystick";

class GameEngine {
    constructor()
    {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.player = null;
      this.leftPressed = false;
      this.rightPressed = false;
      this.joystick = null;
      this.initialize();
      //request fullscreen
      this.canvas.addEventListener("click",this.requestFullScreen.bind(this))
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
        console.log("make new joy");
        this.joystick = new JoyStick(this.canvas, this.ctx);
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
      if(isMobile)
      {
        this.joystick.draw();
        if(this.joystick.x>this.joystick.originalX)
        {
          this.leftPressed = true;
        }else if(this.joystick.x<this.joystick.originalX)
        {
          this.rightPressed = true;
        }
      }

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
      
      if(isMobile)
      {
        this.rightPressed = false;
        this.leftPressed = false;
      }
    }

}

export default GameEngine;