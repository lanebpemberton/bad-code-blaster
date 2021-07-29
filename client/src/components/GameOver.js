import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const height = 200
const width = 200

const getStyles = (overrides) => ({
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    height,
    width,
    background: 'pink',
    //font stuff etc.
    ...overrides
})

const GameOver = ({ onReplayClick }) => {
    const history = useHistory();
    const canvas = document.getElementById('gameCanvas');
    const rect = canvas?.getBoundingClientRect() || {}
    const styles = getStyles({
        top: rect.top + (rect.height / 2) - (height / 2),
        left: rect.left + (rect.width / 2) - (width / 2)
    })

    useEffect(() => {
        document.getElementById("playAgainButton").addEventListener("touchstart",onReplayClick);
        document.getElementById("goHomeButton").addEventListener("touchstart",() => history.push('/home'));
    }, [])


    
    return (
        <div style={styles}>
            Game Over
            <button id="playAgainButton" onClick={onReplayClick}>Play Again?</button>
            <button id="goHomeButton" onClick={() => history.push('/home')}>Go Home</button>
        </div>
    )
}   

export default GameOver;