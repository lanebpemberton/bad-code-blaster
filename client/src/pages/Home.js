import React from 'react';
import {BrowserView, MobileView } from 'react-device-detect';
import "../styles/Home.css";

const Home = () => {

    return (
        <React.Fragment>
            <BrowserView style={{height: '100%'}}>
                <div className="default background">
                    <div className="default border">
                        
                    </div>
                </div>
            </BrowserView>
            <MobileView style={{height: '100%'}}>
                <div className="mobile background">
                    
                </div>
            </MobileView>
        </React.Fragment>
        // <h2>Bad Code Blaster!</h2>
        // <h2>Highscores</h2>
        // <h2>Help</h2>
        // <h2>Customize (dock yard)</h2>
        // <h2>Login!</h2>
    );
  };

export default Home;