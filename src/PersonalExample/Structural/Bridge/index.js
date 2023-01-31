/**
 * O padrão Bridge é considerado um padrão estrutural menos comum em comparação com outros padrões de design, como o Singleton ou o Factory Method, mas ainda é utilizado em algumas aplicações. Ele é especialmente útil quando se deseja separar a abstração da sua implementação, permitindo que ambos possam ser alterados independentemente.
 */


class Cafe {
    gerar() {
        console.log("Gerar café")
    }
}

class Cha {
    gerar() {
        console.log("Gerar chá")
    }
}


class BridgeBebidas {
    constructor(bebida) {
        this.bebida = bebida;
    }

    gerar() {
        this.bebida.gerar();
    }
}

const pedido = new Cha();
const pedido2 = new Cafe();

const maquinaPedidos = new BridgeBebidas(pedido);

maquinaPedidos.gerar();
maquinaPedidos.gerar();
maquinaPedidos.gerar();

maquinaPedidos.bebida = pedido2;

maquinaPedidos.gerar();
maquinaPedidos.gerar();
maquinaPedidos.gerar();