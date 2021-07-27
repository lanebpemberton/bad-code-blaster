import background from "../styles/images/background.png";

class Background {
    constructor(canvas,ctx)
    {
        this.sprite = new Image();
        this.sprite.src = background;
        this.width = canvas.width;
        this.height = canvas.height;
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }
}

export default Background;