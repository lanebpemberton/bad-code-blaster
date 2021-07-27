import fireIcon from "../styles/images/fire.png";
import fireIcon_Pressed from "../styles/images/fire_pressed.png";


class FireButton {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = fireIcon;
        this.width = 50;
        this.height = 50;
        this.x = (this.canvas.width*.75)+(this.width/2);
        this.y = (.9 * this.canvas.height)-(this.height/2);
        this.boundsMultX = this.width;
        this.boundsMultY = this.height;
        this.buttonBounds = [this.x-this.boundsMultX,this.y-this.boundsMultY,this.x+this.boundsMultX,this.y+this.boundsMultY];
        this.pressed = false;
        this.activeTouchID = null;
    }

    checkButtonBounds(x,y)
    {
        if(x>=this.buttonBounds[0] && x<= this.buttonBounds[2] && y>= this.buttonBounds[1] && y<= this.buttonBounds[3])
        {
            return true;
        }
        return false;
    }

    onPressDown(touchEvent)
    {
        if(this.checkButtonBounds(touchEvent.pageX,touchEvent.pageY))
        {
            this.pressed = true;
            this.sprite.src = fireIcon_Pressed;
            //set active touch id
            this.activeTouchID = touchEvent.identifier;
        }
    }

    onPressUp(touchEvent)
    {
        if(this.checkButtonBounds(touchEvent.pageX,touchEvent.pageY))
        {
            this.pressed = false;
            this.sprite.src = fireIcon
        }
    }

    draw()
    {
        this.ctx.save()
        this.ctx.globalAlpha = 0.4;
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        this.ctx.restore();
    }
}

export default FireButton;
