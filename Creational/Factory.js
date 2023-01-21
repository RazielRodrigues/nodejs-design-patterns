/**
 * Basicamente tem uma classe que tem metodos que instanciam
 * as outras classes.
 * 
 * De forma que te possibilita instanciar diversas
 * classes baseada em uma outra.
 */

class Point {
    constructor(x, y) {

        if (!x || !y) {
            throw new Error('Está faltando um argumento!');
        }

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

module.exports = {
    Point,
    PointFactory
}