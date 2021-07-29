import Asteroid from "./Asteroid";

class Enemies {
    constructor(canvas, ctx)
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.asteroids = [];
        this.enemyShips = [];
        this.createAsteroids = true;
        this.createEnemyShips = false;
        this.asteroidCounter = 0;
        this.asteroidFreq = 77;
    }

    update()
    {
        //update asteroid counter
        this.asteroidCounter++;
        //check asteroid counter against asteroid frequency
        if(this.asteroidCounter>=this.asteroidFreq && this.createAsteroids)
        {
            console.log("create!!!");
            //reset counter
            this.asteroidCounter = 0;
            //create asteroid
            this.asteroids.push(new Asteroid(this.canvas, this.ctx));
        }
        //loop through asteroids and update
        for(let a = 0;a < this.asteroids.length;a++)
        {
            let asteroidUpdate = this.asteroids[a].update(a);
            //check result of update
            if(!asteroidUpdate)
            {
                //destroy asteroid
                this.asteroids.splice(a,1);
            }
        }
    }


}

export default Enemies;