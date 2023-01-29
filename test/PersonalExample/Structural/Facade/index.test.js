import NinjaFactory from '../../../../src/PersonalExample/Creational/Factory/NinjaFactory.js';

import { expect } from 'chai';

describe('NinjaFactory', () => {

    it("Deve instanciar um ninja da areia", () => {
        const ninja = new NinjaFactory().invocarNinjaAreia();
        expect(ninja).to.be.instanceOf(NinjaAreia)
    })

})