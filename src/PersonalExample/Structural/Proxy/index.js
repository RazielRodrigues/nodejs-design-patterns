/**
 * 
 * O padrão Proxy é um dos padrões de design estrutural, que se preocupa em criar objetos intermediários para controlar o acesso a outros objetos. O objeto intermediário pode ser utilizado para controlar as operações realizadas sobre o objeto real, como verificações de autenticação, cache ou otimizações de performance. O padrão Proxy permite adicionar comportamentos aos objetos de forma dinâmica e sem afetar a sua funcionalidade original. Além disso, ele também pode ser utilizado para acessar objetos remotos de forma transparente, simulando a existência de um objeto local.
 * 
 */


class Portaria {
    liberarAcesso() {
        console.log('acesso liberado')
    }
}

class PortariaProxy {
    constructor(nivelAcesso) {
        this.nivelAcesso = nivelAcesso;
    }

    abrirPorta() {
        if (this.nivelAcesso < 4) return;
        const portaria = new Portaria();
        portaria.liberarAcesso();
    }

}

const visitante = new PortariaProxy(1);
visitante.abrirPorta();

const visitante2 = new PortariaProxy(8);
visitante2.abrirPorta();