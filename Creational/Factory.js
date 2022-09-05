/**
 * Basicamente tem uma classe que tem metodos que instanciam
 * as outras classes.
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class PointFactory {

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }
}


let point = PointFactory.newPolarPoint(5, Math.PI / 2);
let point2 = PointFactory.newCartesianPoint(5, 6)
console.log(point);
console.log(point2);