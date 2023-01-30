export class Carrinho {
    constructor() {
        this.valorTotal = 0;
        this.produtos = [];
    }

    listarCompras() {
        return JSON.stringify({
            valorTotal: this.valorTotal,
            produtos: this.produtos,
        })
    }
}

export class ComprasBuilder {
    constructor(carrinho = new Carrinho()) {
        this.carrinho = carrinho;
    }

    get adicionarProdutos() {
        return new CarrinhoProdutos(this.carrinho)
    }

    build() {
        return this.carrinho;
    }

}

export class CarrinhoProdutos extends ComprasBuilder {
    constructor(carrinho) {
        super(carrinho)
        this.frutas = []
        this.carnes = []
    }

    adicionarFrutas(fruta, valor) {
        this.frutas.push({
            fruta, valor
        })
        this.carrinho.produtos.push(this.frutas)
        return this;
    }

    adicionarCarnes(carne, valor) {
        this.carnes.push({
            carne, valor
        })
        this.carrinho.produtos.push(this.carnes)
        return this;
    }

    removerItem() {
        this.carrinho.produtos.pop()
        return this;
    }

}