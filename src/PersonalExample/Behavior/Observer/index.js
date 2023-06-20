/**
 *  Os clientes são adicionados à lista de observadores usando o método addCliente. O método avisarSaindoEntrega notifica todos os observadores sobre a saída de uma entrega, invocando o método avisarSaindo em cada cliente.

A classe Cliente é o observador que implementa o método avisarSaindo, que é chamado quando a notificação é recebida. No exemplo, cada cliente imprime uma mensagem informando que a entrega está saindo, juntamente com o nome do cliente.

Portanto, o exemplo segue a estrutura básica do padrão Observer, onde há um sujeito (Entregas) que mantém uma lista de observadores (Clientes) e os notifica sobre mudanças de estado relevantes.

No entanto, é importante mencionar que o exemplo pode ser aprimorado e seguir uma estrutura mais completa e genérica do padrão Observer, incluindo métodos de remoção de observadores, utilização de interfaces ou classes abstratas, entre outros aspectos. Mas, no geral, o exemplo compartilhado ilustra o conceito fundamental do padrão Observer.
 */

class Entregas {
    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    removerCliente(cliente) {
        const index = this.clientes.indexOf(cliente);
        if (index !== -1) {
            this.clientes.splice(index, 1);
        }
    }

    notificarSaidaEntrega(entrega) {
        this.clientes.forEach(cliente => {
            cliente.avisarSaidaEntrega(entrega);
        });
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome;
    }

    avisarSaidaEntrega(entrega) {
        console.log(`A entrega ${entrega} está saindo! Cliente: ${this.nome}`);
    }
}

const entregas = new Entregas();

const cliente1 = new Cliente('Raziel');
const cliente2 = new Cliente('Ingrid');

entregas.adicionarCliente(cliente1);
entregas.adicionarCliente(cliente2);

entregas.notificarSaidaEntrega('carne');
