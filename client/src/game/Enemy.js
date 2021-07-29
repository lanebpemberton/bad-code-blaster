import alien from "../styles/images/alien.png";
import CollidableEntity from "./CollidableEntity";

const enemyTypes = ['foo', 'bar', 'baz']

class Enemy extends CollidableEntity {
    constructor(canvas, ctx)
    {
        const width = 80;
        const height = 20;
        const numLanes = Math.floor(canvas.width / width)
        const x = Math.floor(Math.random() * numLanes) * 50; //todo: randomly determine x coord
        const y = 0;
        super(x, y, width, height);

        const type = Math.floor(Math.random() * enemyTypes.length)
        this.enemyType = enemyTypes[type]
        
        this.ctx = ctx;
        this.canvas = canvas;
        this.damage = 6;
        this.sprite = new Image();
        this.sprite.src = alien;
        this.speed = 4;
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
        if(this.y > this.canvas.height)
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