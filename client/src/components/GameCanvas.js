import {Component} from 'react';
// // Here we are importing a CSS file as a dependency
import '../styles/GameCanvas.css';


class GameCanvas extends Component
{

    render()
    {
        return (<canvas id="gameCanvas" className="gameCanvas"></canvas>);
    }
}


export default GameCanvas;