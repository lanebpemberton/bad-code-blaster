class Graphics {
    constructor()
    {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    initialize()
    {
        let heightRatio = .4;
        this.canvas.height = this.canvas.width * heightRatio;
    }

    

    drawRedBox()
    {
        this.ctx.beginPath();
        this.ctx.rect(20, 40, 50, 50);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }

}



export default Graphics;