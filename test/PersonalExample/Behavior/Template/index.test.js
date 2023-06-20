import assert from 'assert';
import { Partitura } from '../../../../src/PersonalExample/Behavior/Template/Partitura.js';
import sinon from 'sinon';

describe("Partitura", () => {
    describe("tocarMusica", () => {
        it("deve tocar as notas corretamente", async () => {
            // Criar uma instância de Partitura
            const partitura = new Partitura();

            // Espionar tocarMusica
            const tocarMusicaSpy = sinon.spy(Partitura.prototype, "tocarMusica");


            // Chamar o método tocarMusica
            partitura.tocarMusica(["do", "re", "mi"], 500);

            // Verificar a ordem e conteúdo das notas tocadas
            assert.strictEqual(tocarMusicaSpy.callCount, 1);

            // Restaurar o console.log original
            tocarMusicaSpy.restore();
        });

        it("deve lançar um erro para BPM inválido", () => {
            // Criar uma instância de Partitura
            const partitura = new Partitura();

            // Chamar o método tocarMusica com BPM inválido
            assert.throws(() => {
                partitura.tocarMusica(["do", "re", "mi"], 0);
            }, Error);
        });

        it("deve lançar um erro para notas inválidas", () => {
            // Criar uma instância de Partitura
            const partitura = new Partitura();

            // Chamar o método tocarMusica com notas inválidas
            assert.throws(() => {
                partitura.tocarMusica([], 500);
            }, Error);
        });
    });
});