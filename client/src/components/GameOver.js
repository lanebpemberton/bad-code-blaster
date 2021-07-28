import React from 'react';
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
    
    return (
        <div style={styles}>
            Game Over
            <button onClick={onReplayClick}>Play Again?</button>
            <button onClick={() => history.push('/home')}>Go Home</button>
        </div>
    )
}   

export default GameOver;