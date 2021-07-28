import React, { useState, useEffect } from 'react';
import GameEngine from '../game/GameEngine';
import GameCanvas from './GameCanvas';
import ScoreOverlay from './ScoreOverlay';
import GameOver from './GameOver';

const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [enemiesKilled, setEnemiesKilled] = useState(0)
    const [gameEngine, setGameEngine] = useState();

    const handleGameOver = () => {
        setGameOver(true);
        // todo: save score to database
        gameEngine.stop();
    }
    const handleEnemyKilled = () => {
        setEnemiesKilled(currentEnemiesKilled => currentEnemiesKilled + 1)
    }
    const handleReplayClick = () => {
        setGameOver(false);
        setEnemiesKilled(0);
        gameEngine.startEngine();
    }

    useEffect(() => {
        setGameEngine(new GameEngine())
    }, [])


    useEffect(() => {
        if (gameEngine) {
            gameEngine.onGameOver = handleGameOver
            gameEngine.onEnemyKilled = handleEnemyKilled
        }
    }, [gameEngine])

    return (
        <React.Fragment>
            <GameCanvas /> 
            <ScoreOverlay score={enemiesKilled * 50} />
            {gameOver && <GameOver onReplayClick={handleReplayClick} />}
        </React.Fragment>
    )
}

export default Game;
   