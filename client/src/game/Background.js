import background from "../styles/images/background.jpg";

class Background {
    constructor(canvas,ctx)
    {
        this.img = new Image();
        this.img.onload = () => {
            this.imgW = this.img.width * this.scale;
            this.imgH = this.img.height * this.scale;
        }
        this.img.src = background;

        this.width = canvas.width;
        this.height = canvas.height;
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.ctx = ctx;
        this.dispensers = [];

        this.CanvasXSize = this.canvas.width;
        this.CanvasYSize = this.canvas.height;
        this.scale = 1.25;
        this.y = this.CanvasYSize; // vertical offset

        this.dx = 1;
        this.x = 0;
        this.imgW = this.img.width * this.scale;
        this.imgH = this.img.height * this.scale;
    
        if (this.imgH > this.CanvasYSize) 
        {
            // image larger than canvas
            this.y = this.CanvasYSize - this.imgH;
        }
        if (this.imgH > this.CanvasYSize) 
        {
            // image width larger than canvas
            this.clearX = this.imgW;
        } else 
        {
            this.clearX = this.CanvasXSize;
        }
        if (this.imgH > this.CanvasYSize) 
        {
            // image height larger than canvas
            this.clearY = this.imgH;
        } else
        {
            this.clearY = this.CanvasYSize;
        }
    }

    draw()
    {
        // if image is <= Canvas Size
        if (this.imgH <= this.CanvasYSize)
        {
            // reset, start from beginning
            if (this.y > this.CanvasYSize)
            {
                this.y = -this.imgH + this.y;
            }
            // draw additional image1
            if (this.y > 0)
            {
                this.ctx.drawImage(this.img,this.x,-this.imgH +  this.y, this.imgW, this.imgH);
            }
            // draw additional image2
            if (this.y - this.imgH > 0)
            {
                this.ctx.drawImage(this.img, this.x,-this.imgH * 2 +  this.y, this.imgW, this.imgH);
            }
        }
        // image is > Canvas Size
        else 
        {
            // reset, start from beginning
            if (this.y > (this.CanvasYSize))
            {
                this.y = this.CanvasYSize - this.imgH;
            }
            // draw additional image
            if (this.y > (this.CanvasYSize-this.imgH)) 
            {
                this.ctx.drawImage(this.img, this.x, this.y - this.imgH + 1, this.imgW, this.imgH);
            }
        }
        // draw image
        this.ctx.drawImage(this.img, this.x, this.y,this.imgW, this.imgH);
        // amount to move
        this.y += this.dx;
    }
}

export default Background;