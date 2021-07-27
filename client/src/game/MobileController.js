import FireButton from "./FireButton";
import JoyStick from "./Joystick";

class MobileController {
    constructor(canvas,ctx)
    {
        this.fireButton = new FireButton(canvas,ctx);
        this.joystick = new JoyStick(canvas,ctx);
        document.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:false});
        document.addEventListener("touchmove",this.handleTouchMove.bind(this));
        document.addEventListener("touchend",this.handleTouchEnd.bind(this));
    }

    handleTouchStart(e)
    {
        //prevent page moving on mobile
        e.preventDefault();
        //setup current touch
        this.currentTouch = e.changedTouches[0];
        //check for fire button
        this.fireButton.onPressDown(this.currentTouch);
    }

    handleTouchMove(e)
    {
        let currentTouch = e.changedTouches[0];
        this.joystick.updateJoystick(currentTouch);
    }

    handleTouchEnd(e)
    {
        //get current touch
        let currentTouch = e.changedTouches[0];
        //evaluate touch end id
        if(currentTouch.identifier === this.fireButton.activeTouchID)
        {
            //release fire button
            this.fireButton.onPressUp(currentTouch);
            //reset active id
            this.fireButton.activeTouchID = null;
        }else if(currentTouch.identifier === this.joystick.activeTouchID)
        {
            //reset joystick
            this.joystick.resetJoystick(currentTouch);
            //reset active id
            this.joystick.activeTouchID = null;
        }
    }

    draw()
    {
        this.fireButton.draw();
        this.joystick.draw();
    }

}

export default MobileController