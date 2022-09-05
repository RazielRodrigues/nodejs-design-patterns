CoordinateSystem = {
    CARTESIAN: 0,
    POLAR: 1,
};

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return new PointFactory();
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