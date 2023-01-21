const { expect } = require('chai')
const { Point, PointFactory } = require('../../Creational/Factory');

describe('Factory.js', () => {

    it('Deve iniciar o ponto', () => {
        const ponto = new Point(1, 2);
        expect(ponto).to.be.instanceOf(Point);
        expect(ponto.x).to.be.equal(1);
        expect(ponto.y).to.be.equal(2);
    })

    it('Deve retornar erro ao iniciar o ponto sem um dos argumentos', () => {
        try {
            (new Point(1, undefined))
        } catch (error) {
            expect(error.message).to.be.equal('Está faltando um argumento!');
        }
    })

    it('Deve retornar um ponto cartesiano', () => {
        const newCartesianPoint = PointFactory.newCartesianPoint(5, 6)
        expect(newCartesianPoint).to.be.deep.equal({ x: 5, y: 6 })
    })

    it('Deve retornar um ponto polar', () => {
        const newPolarPoint = PointFactory.newPolarPoint(5, Math.PI / 2);
        expect(newPolarPoint).to.be.deep.equal({ x: 3.061616997868383e-16, y: 5 })
    })

})