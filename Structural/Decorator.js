class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(radius = 0) {
        super();
        this.radius = radius;
    }

    resize(factor) {
        this.radius *= factor;
    }

    toString() {
        return `A circle ${this.radius}`;
    }
}

class ColoredShape extends Shape {
    constructor(shape, color) {
        super();
        this.shape = shape;
        this.color = color;
    }
    toString() {
        return `${this.shape.toString()}` + `has the color ${this.color}`;
    }
}

let circle = new Circle(2);
console.log(circle);

let redCircle = new ColoredShape(circle, "red");
console.log(redCircle.toString());