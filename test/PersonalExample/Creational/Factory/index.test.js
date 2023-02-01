import NinjaFactory from '../../../../src/PersonalExample/Creational/Factory/NinjaFactory.js';
import NinjaAreia from '../../../../src/PersonalExample/Creational/Factory/NinjaAreia.js';
import NinjaFolha from '../../../../src/PersonalExample/Creational/Factory/NinjaFolha.js';

import { expect } from 'chai';
import sinon from 'sinon';

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

describe('NinjaAreia', () => {

    it("Deve instanciar um ninja da areia e usar o jutsu", () => {
        const ninja = new NinjaAreia('kage bushin', 'perdeu!');

        const spy = sinon.spy(console, 'log');

        ninja.usarJutsu();

        expect(spy.firstCall.args[0]).to.equal(`Ninja da areia usando jutsu: ${ninja.jutsu}`);

        console.log.restore();

    })

    it("Deve instanciar um ninja da areia e falar", () => {
        const ninja = new NinjaAreia('kage bushin', 'perdeu!');

        const spy = sinon.spy(console, 'log');

        ninja.falar();

        expect(spy.firstCall.args[0]).to.equal(`Ninja da areia falando: ${ninja.fala}`);

        console.log.restore();

    })

})

describe('NinjaFolha', () => {

    it("Deve instanciar um ninja da folha e usar o jutsu", () => {
        const ninja = new NinjaFolha('kage bushin', 'perdeu!');

        const spy = sinon.spy(console, 'log');

        ninja.usarJutsu();

        expect(spy.firstCall.args[0]).to.equal(`Ninja da folha usando jutsu: ${ninja.jutsu}`);

        console.log.restore();

    })

    it("Deve instanciar um ninja da folha e falar", () => {
        const ninja = new NinjaFolha('kage bushin', 'perdeu!');

        const spy = sinon.spy(console, 'log');

        ninja.falar();

        expect(spy.firstCall.args[0]).to.equal(`Ninja da folha falando: ${ninja.fala}`);

        console.log.restore();

    })

})