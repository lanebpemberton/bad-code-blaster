import React from 'react';
import {isMobile} from 'react-device-detect';
import "../styles/Home.css";

const Home = () => {
    let deviceType = "default"
    if(isMobile)
    {
        deviceType = "mobile"
    }

    return (
        <div className={`${deviceType} background`}>
            <div className={`${deviceType} border`}>
                
            </div>
        </div>

        // <h2>Bad Code Blaster!</h2>
        // <h2>Highscores</h2>
        // <h2>Help</h2>
        // <h2>Customize (dock yard)</h2>
        // <h2>Login!</h2>
    );
  };

export default Home;