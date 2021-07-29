
import React, { useCallback, useState, useEffect } from 'react';
import { useMutation } from '@apollo/client'
import GameEngine from '../game/GameEngine';
import GameCanvas from './GameCanvas';
import ScoreOverlay from './ScoreOverlay';
import GameOver from './GameOver';
import { MUTATION_ADD_HIGHSCORE } from '../utils/mutations';


const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [enemiesKilled, setEnemiesKilled] = useState(0)
    const [gameEngine, setGameEngine] = useState();
    const [addHighscore] = useMutation(MUTATION_ADD_HIGHSCORE)

    const handleGameOver = () => {
        setEnemiesKilled(currentEnemiesKilled => {
            try {
                addHighscore({ variables: {
                    user_id: localStorage.getItem('loggedInUserId'),
                    ship_id: '60ff4a746d4e5e393cd036d7',
                    score: currentEnemiesKilled * 50,
                    time_alive: 0,
                    enemies_killed: currentEnemiesKilled,
                    bad_code_blasted: 0,
                }}).then(() => {}, (exception) => {
                    console.log('exception here', exception)
                })
            } catch (e) {
                console.log('exception', e)
            }

            return currentEnemiesKilled
        })

        setGameOver(true);
        gameEngine.stop();
    }

    const handleEnemyKilled = () => {
        setEnemiesKilled(currentEnemiesKilled => currentEnemiesKilled + 1)
    }
    const handleReplayClick = () => {
        setGameOver(false);
        setEnemiesKilled(0);
        gameEngine.enemies = [];
        gameEngine.player.bulletsFired = [];
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
   