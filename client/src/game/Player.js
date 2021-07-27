import logo from "../styles/images/ship.png";
import PlayerBullet from "./PlayerBullet";

class Player {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = logo;
        this.width = 45;
        this.height = 31;
        this.x = (this.canvas.width-this.width)/2;
        this.y = .9 * this.canvas.height;
        this.bulletsFired = [];
        // this.y = 60;
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    fire()
    {
        this.bulletsFired.push(new PlayerBullet(this.x+(this.width/2),this.y-(this.height/2),this.ctx))
    }

    destroyBullet(index)
    {
        this.bulletsFired.splice(index,1);
    }   
}

export default Player;