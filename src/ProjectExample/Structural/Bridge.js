/**
 * Ajuda a trabalhar com o polimorfismo...
 */

class VectorRenderer {
    renderCircle(radius) {
        console.log(`Drawing a circle of radius ${radius}`);
    }
}

class RasterRenderer {
    renderCircle(radius) {
        console.log(`Drawing pixels for circle of radius ${radius}`);
    }
}

class WebRenderer {
    renderCircle(radius) {
        console.log(`Drawing web radius ${radius}`);
    }
}

class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }
}

class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }

    resize(factor) {
        this.radius *= factor;
    }
}

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let web = new WebRenderer();

let circle = new Circle(web, 24);
circle.draw();
circle.resize(4);
circle.draw();