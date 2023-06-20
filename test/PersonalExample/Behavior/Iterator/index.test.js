import assert from 'assert';
import sinon from 'sinon';

import { HttpResponses, mensagem } from '../../../../src/PersonalExample/Behavior/Iterator/index.js';

describe.only('HttpResponses', () => {
    it('deve adicionar uma resposta corretamente', () => {
        const http = new HttpResponses();
        const response = new mensagem('ok', 200);
        http.addResponse(response);
        assert.deepStrictEqual(http.responses, [response]);
    });
});
