/**
 * A classe HttpResponses representa uma coleção de respostas HTTP, implementando o protocolo do Iterator. Cada resposta é uma instância da classe Mensagem. Ao utilizar o for...of com uma instância de HttpResponses, é possível iterar sobre as respostas e acessar suas propriedades msg e status. Isso torna o código mais legível e simplifica o processamento das respostas.
 */

export class Mensagem {
    constructor(msg, status) {
        this.msg = msg;
        this.status = status;
    }
}

export class HttpResponses {
    constructor() {
        this.responses = [];
    }

    addResponse(response) {
        this.responses.push(response);
    }

    [Symbol.iterator]() {
        let indice = 0;
        return {
            next: () => (indice < this.responses.length) ? {
                value: this.responses[indice++],
                done: false
            } : { done: true }
        }
    }


}

const http = new HttpResponses();
http.addResponse(new Mensagem('ok', 200));
http.addResponse(new Mensagem('ok', 200));
http.addResponse(new Mensagem('erro', 500));

for (const sala of http) {
    console.log("msg", sala.msg);
    console.log("status", sala.status);
}
