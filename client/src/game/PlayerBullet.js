import bullet from "../styles/images/bullet.png";

class PlayerBullet {
    constructor(x,y,ctx)
    {
        this.damage = 6;
        this.sprite = new Image();
        this.sprite.src = bullet;
        this.width = 10;
        this.height = 15;
        this.x = x - (this.width/2);
        this.y = y;
        this.speed = 6;
        this.ctx = ctx;
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    update()
    {
        //update y coord
        this.y -= this.speed;
        //check position for outside top of frame
        if(this.y < (-1 * this.height))
        {
            return false;
        }else
        {
            this.draw();
            return true;
        }
    }

    destroy()
    {

    }
}

export default PlayerBullet;