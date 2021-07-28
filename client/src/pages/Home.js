import React from 'react';
import {BrowserView, MobileView } from 'react-device-detect';
import CustomizeImg from '../styles/images/individuals/customize.png'
import "../styles/Home.css";
// import MyTable from './Highscore';

const Home = () => {

    return (
        <React.Fragment>
            <BrowserView style={{height: '100%'}}>
                <div className="default background">
                    <div className="default border">
                        <div className= "default title">
                        </div>
                        <div className="default high">
                            <h1 className="title font">Highscores!</h1>
                            {/* <Highscore></Highscore> */}
                        </div>
                        <div className="default customize">
                                <h1 className="title font">Customize!</h1>
                        </div>
                        <div className="default help">
                            <h1 className="title font">Help</h1>
                        </div>
                        <div className="default play">
                            <h1 id="title-font"className="title font">Play now!</h1>
                        </div>
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