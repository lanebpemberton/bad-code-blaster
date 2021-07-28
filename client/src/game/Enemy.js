import bullet from "../styles/images/bullet.png";

class Enemy {
    constructor(canvas, ctx)
    {
        this.ctx = ctx;
        this.canvas = canvas;
        this.damage = 6;
        this.sprite = new Image();
        this.sprite.src = bullet;
        this.width = 50;
        this.height = 15;
        this.speed = 6;
        this.y = 0;

        const numLanes = Math.floor(this.canvas.width / this.width)
        
        this.x = Math.floor(Math.random() * numLanes) * 50; //todo: randomly determine x coord
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    update()
    {
        //update y coord
        this.y += this.speed;
        //check position for outside bottom of frame
        if(this.y > (this.canvas.height))
        {
            return false;
        }else
        {
            this.draw();
            return true;
        }
    }
}

export default Enemy;