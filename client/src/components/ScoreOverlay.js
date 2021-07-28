import React from 'react';

const getStyles = (overrides) => ({
    position: 'absolute',
    color: 'red',
    ...overrides
})

const ScoreOverlay = ({score}) => {
    const canvas = document.getElementById('gameCanvas');
    const rect = canvas?.getBoundingClientRect() || {}
    const styles = getStyles({
        top: rect.top || 0,
        left: rect.left || 0
    })
    
    return (
        <div style={styles}>
            Score: {score}
        </div>
    )
}   

export default ScoreOverlay;