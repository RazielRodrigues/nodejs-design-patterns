/**
 * O padrão Decorator é um padrão de design de software que permite adicionar dinamicamente comportamentos e responsabilidades a objetos individuais. Ele é usado para criar objetos derivados a partir de objetos já existentes, sem alterar seu código-fonte. É útil quando você deseja adicionar comportamentos a objetos individualmente, sem precisar mudar a classe ou o objeto base. O Decorator é implementado como uma série de classes concretas que envolvem a classe base e a estendem com suas próprias responsabilidades.
 */


class Pedido {
    descricao() {
        return '';
    }

    valor() {
        return 0;
    }
}

class PedidoDecorator extends Pedido {
    constructor(pedido) {
        super();
        this.pedido = pedido;
    }

    descricao() {
        return this.pedido.descricao()
    }

    valor() {
        return this.pedido.valor()
    }

}

class AdicionarBebida extends PedidoDecorator {
    constructor(pedido) {
        super();
        this.pedido = pedido;
    }

    descricao() {
        return this.pedido.descricao() + 'bebida gelada, '
    }

    valor() {
        return this.pedido.valor() + 15
    }
}

class AdicionarCarne extends PedidoDecorator {
    constructor(pedido) {
        super();
        this.pedido = pedido;
    }

    descricao() {
        return this.pedido.descricao() + 'carne com cebola, arroz e feijão'
    }

    valor() {
        return this.pedido.valor() + 17
    }
}

const pedido = new Pedido();
const bebidaNoPedido = new AdicionarBebida(pedido);
const carneNoPedido = new AdicionarCarne(bebidaNoPedido);

console.table({
    pedido: carneNoPedido.descricao(),
    valor: carneNoPedido.valor()
})