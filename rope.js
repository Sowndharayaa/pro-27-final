class Rope {
    constructor(body1, body2,xOffset) {
        var options = {

            bodyA: body1,
            bodyB: body2,
            pointB : {x:xOffset,y:0}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.xOffset = xOffset;
    }
    display() {
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        stroke ("white");
        strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y)
    }
}   