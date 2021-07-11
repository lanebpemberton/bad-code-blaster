import {Component} from 'react';
import Backgrounds from '../engine/Backgrounds';

// Here we are importing a CSS file as a dependency
import '../styles/GameCanvas.css';

class GameCanvas extends Component
{
    componentDidMount()
    {
        //initialize background of game area
        let background = new Backgrounds();
        //draw initial artwork
        background.drawRedBox();
    }
    render()
    {
        return (<canvas id="gameCanvas" className="gameCanvas"></canvas>);
    }
}

export default GameCanvas;