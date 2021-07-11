import React from 'react';

function GameLogic()
{
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = "./GameLogic.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    // return (
    //     <script>
    //         var ctx = canvas.getContext("2d");
    //         ctx.beginPath();
    //         ctx.rect(20, 40, 50, 50);
    //         ctx.fillStyle = "#FF0000";
    //         ctx.fill();
    //         ctx.closePath();
    //     </script>
    // );
}

export default GameLogic;