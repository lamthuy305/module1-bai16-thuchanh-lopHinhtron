class Cirle {
    radius;
    color;

    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    getArea() {
        return this.radius*this.radius*Math.PI;
    }

    setRadius(radius) {
        this.radius = radius;
    }

}