const { expect } = require('chai')
const { TeaFactory, CoffeeFactory, Tea, Coffee } = require('../../Creational/FactoryAbstract');

describe('FactoryAbstract.js', () => {

    it('Deve iniciar o chá', () => {
        const tea = new TeaFactory();
        expect(tea).to.be.instanceOf(TeaFactory);
        expect(tea.makeTea()).to.be.instanceOf(Tea)
        expect(tea.prepare(10)).to.be.equal('preparing 10');
    })

    it('Deve iniciar o café', () => {
        const coffee = new CoffeeFactory();
        expect(coffee).to.be.instanceOf(CoffeeFactory);
        expect(coffee.makeCoffee()).to.be.instanceOf(Coffee)
        expect(coffee.prepare(10)).to.be.equal('preparing 10');
    })

})