class chain {
    constructor(BodyA,BodyB) {


        var options = {
            BodyA:BodyA,
            BodyB:BodyB,
            stiffness:0.04,
            length:10 
        }
    }
    display() {
        var pointA = this.chain.BodyA.position ;
        var pointB = this.chain.BodyA.position ;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}