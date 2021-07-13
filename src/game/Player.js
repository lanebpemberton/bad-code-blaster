import logo from "../styles/images/ship.png";

class Player {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = 9;
        this.sprite = new Image();
        this.canDraw = false;
        this.sprite.src = logo;
        this.width = 10;
        this.height = 14;
        // this.y = (this.canvas.height-this.radius)/2;
        this.y = 60;
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,15,this.y,this.width,this.height);
    }
}

export default Player;