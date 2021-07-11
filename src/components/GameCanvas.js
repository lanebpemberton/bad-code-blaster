import {Component} from 'react';
import GameEngine from '../game/GameEngine';

// Here we are importing a CSS file as a dependency
import '../styles/GameCanvas.css';

class GameCanvas extends Component
{
    componentDidMount()
    {
        //initialize graphics of game area
        let gameEngine = new GameEngine();
        //set scaling to device resolution
        gameEngine.initialize();
        //draw initial graphics
        gameEngine.drawPlayerOne();
    }
    render()
    {
        return (<canvas id="gameCanvas" className="gameCanvas"></canvas>);
    }
}

export default GameCanvas;