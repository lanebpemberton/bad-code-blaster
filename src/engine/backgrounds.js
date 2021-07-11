class Backgrounds {
    constructor()
    {

    }

    drawRedBox()
    {
        var canvas = document.getElementById("gameCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

}



export default Backgrounds;