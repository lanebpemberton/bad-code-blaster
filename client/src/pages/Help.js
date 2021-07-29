import React from 'react'
import GoBackButton from '../components/GoBackButton'
import '../styles/Help.css'

function Help() {
    return(
        <div className= "default background">
            <div className= "default border">
                <div className="helpBox">
                    <p className="helpText">How to Play<br/>
                    On Desktop: Press the left and right arrow keys to move your ship, and press Spacebar to blast!<br/>
                    On Mobile: Use the left joystick to control your direction, and the right button to blast!<br/>
                    Don't let the bad code fragments get past you - good luck!</p>
                </div>
                <div className="helpBackButtonDiv">
                    <GoBackButton />
                </div>
            </div>
        </div>
    )
}

export default Help
