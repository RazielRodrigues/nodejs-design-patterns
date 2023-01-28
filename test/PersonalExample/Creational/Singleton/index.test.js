import LuzSingleton from '../../../../src/PersonalExample/Creational/Singleton/LuzSingleton.js';

import { expect } from 'chai';

describe.only('LuzSingleton', () => {

    it("Deve instanciar um objeto unico", () => {
        const luzSingletonSala = new LuzSingleton()
        const luzSingletonQuarto = new LuzSingleton()
        expect(luzSingletonSala === luzSingletonQuarto).to.be.true;
        expect(luzSingletonSala !== luzSingletonQuarto).to.be.false;
    })

    it("Deve mostrar a diferença entre uma classe singleton e não singleton", () => {
        const luzSingletonSala = new LuzSingleton()
        const luzSingletonQuarto = new LuzSingleton()
        expect(luzSingletonSala === luzSingletonQuarto).to.be.true;
        expect(luzSingletonSala !== luzSingletonQuarto).to.be.false;

        class luzNaoSingleton { constructor() { } }

        const luzNaoSingletonBanheiro = new luzNaoSingleton()
        const luzNaoSingletonCozinha = new luzNaoSingleton()
        expect(luzNaoSingletonBanheiro === luzNaoSingletonCozinha).to.be.false;
        expect(luzNaoSingletonBanheiro !== luzNaoSingletonCozinha).to.be.true;

    })

    it("Deve ter mesma cor de luz para todos os objetos", () => {
        const luzSingletonSala = new LuzSingleton()
        const luzSingletonQuarto = new LuzSingleton()
        expect(luzSingletonSala.cor === luzSingletonQuarto.cor).to.be.true;
    })

    it("Deve alterar a da luz para todos os objetos", () => {
        const luzSingletonSala = new LuzSingleton()
        const luzSingletonQuarto = new LuzSingleton()

        luzSingletonQuarto.cor = 'Vermelha'

        expect(luzSingletonSala.cor === luzSingletonQuarto.cor).to.be.true;
    })

})