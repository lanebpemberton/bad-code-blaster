import React, { useEffect } from 'react';

// Here we are importing a CSS file as a dependency
import '../styles/GameCanvas.css';

//here we setup inline styles as a js object
// const styles = {
//     titleBar: {
//         fontWeight:10
//     }
// }



function GameCanvas()
{
    return (
        <canvas id="gameCanvas" className="gameCanvas">
            </canvas>
    );
}

export default GameCanvas;