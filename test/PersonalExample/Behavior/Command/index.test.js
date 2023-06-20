import assert from 'assert';
import sinon from 'sinon';

import { TV, LigarTVCommand, DesligarTVCommand, ControleRemoto } from '../../../../src/PersonalExample/Behavior/Command/Controle.js';

describe('Controle', () => {
    const spy = sinon.spy(TV.prototype, "ligar");
    const spy2 = sinon.spy(TV.prototype, "desligar");

    it('deve chamar o metodo ligar corretamente', () => {
        const tv = new TV();

        const ligar = new LigarTVCommand(tv);
        const controle = new ControleRemoto();

        controle.setCommand(ligar);
        controle.pressionarBotao();

        assert.strictEqual(spy.callCount, 1);
    });

    it('deve chamar o metodo desligar corretamente', () => {
        const tv = new TV();
        const desligar = new DesligarTVCommand(tv);
        const controle = new ControleRemoto();

        controle.setCommand(desligar);
        controle.pressionarBotao();

        assert.strictEqual(spy2.callCount, 1);
    });

    it('deve chamar os metodos ligar e desligar', () => {
        const tv = new TV();
        const desligar = new DesligarTVCommand(tv);
        const ligar = new LigarTVCommand(tv);
        const controle = new ControleRemoto();

        controle.setCommand(ligar);
        controle.pressionarBotao();

        controle.setCommand(desligar);
        controle.pressionarBotao();

        controle.setCommand(ligar);
        controle.pressionarBotao();

        controle.setCommand(desligar);
        controle.pressionarBotao();

        assert.strictEqual(spy.callCount, 3);
        assert.strictEqual(spy2.callCount, 3);

    });

});
