import logo from "../styles/images/ship.png";

//const shipImgMap = {}
//Line 3 is an object where the keys are ship_name or _id, and values are the path to the image.
//We will need to import them all in the same way as above on line 1. 

class Player {
    constructor(canvas, ctx) //In addition to the above comments, we will add a constructor argument to declare which ship is selected
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprite = new Image();
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