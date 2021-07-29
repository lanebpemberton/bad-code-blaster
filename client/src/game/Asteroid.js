import asteroid1 from "../styles/images/asteroid1.png";
import asteroid2 from "../styles/images/asteroid2.png";
import asteroid3 from "../styles/images/asteroid3.png";

class Asteroid {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.score = 7;
        this.sprite = new Image();
        this.importAsteroid(Math.floor(Math.random() * 3) + 1);
        this.width = 25;
        this.height = 25;
        let randomStartX = Math.floor(Math.random() * (this.canvas.width-this.width)) + 1 + this.width;
        this.x = randomStartX;
        this.y = 0;
        this.speed = 3;
    }

    importAsteroid(index)
    {
        let imgRelationship = {
            "asteroid1": asteroid1,
            "asteroid2": asteroid2,
            "asteroid3": asteroid3,
        }
        this.sprite.src = imgRelationship[`asteroid${index}`];
    }

    draw()
    {
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    update()
    {
        //is asteroid in frame
        if(this.y<this.canvas.height)
        {
            this.y += this.speed;
            this.draw();
        }else
        {
            //remove from stack
            return false;
        }
        return true;
    }
}

export default Asteroid;