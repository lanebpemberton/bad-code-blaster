import React from 'react';
import {BrowserView, MobileView } from 'react-device-detect';
import HelpImg from '../styles/images/individuals/help\ hex\ match.png'
import "../styles/Home.css";
import Highscore from './Highscore';

const Home = () => {

    return (
        <React.Fragment>
            <BrowserView style={{height: '100%'}}>
                <div className="default background">
                    <div className="default border">
                        <div className= "default title">
                        </div>
                        <div className="default high">
                            <h1 className="title font highText">HIGHSCORES</h1>
                            <Highscore></Highscore>
                        </div>
                        <div className="default customize centerContent">
                                <a href="/customize"><h1 className="title font customizeText">CUSTOMIZE</h1></a>
                        </div>
                        <div className="default help centerContent">
                            <a href="/help" className="helpImg centerContent"><img alt='Help' src={HelpImg}></img></a>
                        </div>
                        <div className="default play centerContent">
                            <a href="/play"><h1 id="title-font"className="title font playText">PLAY NOW</h1></a>
                        </div>
                    </div>
                    
                </div>
            </BrowserView>
            <MobileView style={{height: '100%'}}>
                <div className="mobile background" style={{display:'flex',justifyContent:'space-between',flexDirection:'column',alignItems:'center',}}>
                    <div className="mobile title">
                    </div>
                    <a href="/play" className="mobile play" style={{display:'flex',justifyContent:'center',alignItems:'center'}}><h1>PLAY</h1></a>
                    <div className="mobile cluster" style={{width:'100%',height:'20%',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                        <div className="mobile highscore">
                        </div>
                        <div className="mobile customize">
                            <a href="/customize"></a>
                        </div>
                        <div className="mobile help">
                            <a href="/help"></a>
                        </div>
                    </div>
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