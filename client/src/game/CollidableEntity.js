class CollidableEntity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    collidesWith(collidableEntity) {
        return (
            this.x < collidableEntity.x + collidableEntity.width &&
            this.x + this.width > collidableEntity.x &&
            this.y < collidableEntity.y + collidableEntity.height &&
            this.y + this.height > collidableEntity.y
        )
    }
}

export default CollidableEntity;