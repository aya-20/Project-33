class Snow {
    constructor(x, y, width, height) {
        var options = {
            restitution: 2,
            friction: 0.3,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        this.img1 = loadImage("snow4.webp");
        this.img2 = loadImage("snow5.webp");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img1, 0, 0, this.width, this.height);
        pop();
    } 
}


