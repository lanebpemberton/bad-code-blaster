import logo from "../styles/images/ship.png";

class Player {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprite = new Image();
        this.canDraw = false;
        this.sprite.src = logo;
        this.width = 45;
        this.height = 31;
        this.x = (this.canvas.width-this.width)/2;
        this.y = .9 * this.canvas.height;
        // this.y = 60;
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }
}

export default Player;