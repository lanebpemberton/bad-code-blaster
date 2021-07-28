import bullet from "../styles/images/bullet.png";
import CollidableEntity from "./CollidableEntity";

class PlayerBullet extends CollidableEntity {
    constructor(x,y,ctx)
    {
        const width = 10;
        const height = 15;
        const adjustedX = x - (width/2);
        super(adjustedX, y, width, height)

        this.damage = 6;
        this.sprite = new Image();
        this.sprite.src = bullet;
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
}

export default PlayerBullet;