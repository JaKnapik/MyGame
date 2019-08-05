class Object2D {
    constructor(image, positionX, positionY, width, height, visible, speed) {
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.visible = visible;
        this.speed = speed;
    }
    drawObject2D(scaleX, scaleY) {
        context.drawImage(this.image, this.positionX, this.positionY, scaleX, scaleY);
    }
}