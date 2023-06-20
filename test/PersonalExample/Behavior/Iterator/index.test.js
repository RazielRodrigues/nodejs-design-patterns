import assert from 'assert';
import sinon from 'sinon';

import { HttpResponses, Mensagem } from '../../../../src/PersonalExample/Behavior/Iterator/Mensagem.js';

describe('HttpResponses', () => {
    it('deve adicionar uma resposta corretamente', () => {
        const http = new HttpResponses();
        const response = new Mensagem('ok', 200);
        http.addResponse(response);
        assert.deepStrictEqual(http.responses, [response]);
    });
});
