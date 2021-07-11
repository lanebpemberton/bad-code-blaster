import {Component} from 'react';
import Graphics from '../engine/Graphics';

// Here we are importing a CSS file as a dependency
import '../styles/GameCanvas.css';

class GameCanvas extends Component
{
    componentDidMount()
    {
        //initialize graphics of game area
        let graphics = new Graphics();
        //set scaling to device resolution
        graphics.initialize();
        //draw initial graphics
        graphics.drawRedBox();
    }
    render()
    {
        return (<canvas id="gameCanvas" className="gameCanvas"></canvas>);
    }
}

export default GameCanvas;