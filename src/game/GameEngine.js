import Scale from "./Scale";

class GameEngine {
    constructor()
    {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    initialize()
    {
      //set correct scale of game canvas
      Scale(this.canvas,this.ctx);
    }

    drawPlayerOne()
    {
        this.ctx.beginPath();
        this.ctx.arc(20, 40, 10, 0, Math.PI*2, false);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }

}



export default GameEngine;