import CollidableEntity from "./CollidableEntity";
import enemyRelationships from "./EnemyViews";

class Enemy extends CollidableEntity {
    constructor(canvas, ctx)
    {
        const width = 60;
        const height = 60;
        const numLanes = Math.floor(canvas.width / width)
        const x = Math.floor(Math.random() * numLanes) * 50; //todo: randomly determine x coord
        const y = 0;
        super(x, y, width, height);

        const type = Math.floor(Math.random() * enemyRelationships.length)
        this.enemyType = enemyRelationships[type]
        
        this.ctx = ctx;
        this.canvas = canvas;
        this.damage = 6;
        this.sprite = new Image();
        this.sprite.src = this.enemyType;
        this.speed = 2;
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