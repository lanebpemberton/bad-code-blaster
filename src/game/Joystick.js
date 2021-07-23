import joystickIcon from "../styles/images/joy.png";
import fireIcon from "../styles/images/fire.png"

 class JoyStick {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = joystickIcon;
        this.width = 50;
        this.height = 50;
        this.originalX = (this.canvas.width*.05)+(this.width/2);
        this.x = (this.canvas.width*.05)+(this.width/2);
        this.y = (.9 * this.canvas.height)-(this.height/2);
        this.boundsMultX = this.width * 1.1;
        this.boundsMultY = this.height * 1.3;
        this.buttonBounds = [this.x-this.boundsMultX,this.y-this.boundsMultY,this.x+this.boundsMultX,this.y+this.boundsMultY]
        document.addEventListener("touchmove",this.preventDefaultScroll,{passive:false})
        document.addEventListener("touchmove",this.updateJoystick.bind(this))
        document.addEventListener("touchend",this.resetJoystick.bind(this))
    }

    preventDefaultScroll(e)
    {
        e.preventDefault();
    }

    checkButtonBounds(x,y)
    {
        if(x>=this.buttonBounds[0] && x<= this.buttonBounds[2] && y>= this.buttonBounds[1] && y<= this.buttonBounds[3])
        {
            return true;
        }
        return false;
    }

    updateJoystick(ev)
    {
        var touchLocation = ev.targetTouches[0];
        //check for bounds
        if(this.checkButtonBounds(touchLocation.pageX,touchLocation.pageY))
        {
            this.x = touchLocation.pageX;
        }
    }

    resetJoystick()
    {
        this.x = this.originalX;
    }

    draw()
    {
        this.ctx.save()
        this.ctx.globalAlpha = 0.4;
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        this.ctx.restore();
    }
 }

 export default JoyStick;