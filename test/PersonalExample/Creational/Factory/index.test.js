import NinjaFactory from '../../../../src/PersonalExample/Creational/Factory/NinjaFactory.js';
import NinjaAreia from '../../../../src/PersonalExample/Creational/Factory/NinjaAreia.js';
import NinjaFolha from '../../../../src/PersonalExample/Creational/Factory/NinjaFolha.js';

import { expect } from 'chai';

describe('NinjaFactory', () => {

    it("Deve instanciar um ninja da areia", () => {
        const ninja = new NinjaFactory().invocarNinjaAreia();
        expect(ninja).to.be.instanceOf(NinjaAreia)
    })

    it("Deve instanciar um ninja da folha", () => {
        const ninja = new NinjaFactory().invocarNinjaFolha();
        expect(ninja).to.be.instanceOf(NinjaFolha)
    })

})