

class Construcao {
    construir() { }
}

class Muros extends Construcao {

    constructor(altura, largura) {
        super();
        this.altura = altura;
        this.largura = largura;
    }

    construir() {
        console.log(`construindo um muro de ${this.altura} por ${this.largura}`);
    }
}

class Pedreiro extends Construcao {

    constructor(muros = []) {
        super();
        this.muros = muros;
    }

    construir() {

        if (!this.muros) {
            return;
        }

        this.muros.map((m) => m.construir())
    }
}


const muros = [
    new Muros(10, 20),
    new Muros(213, 87),
    new Muros(124, 173)
];

const tioJaime = new Pedreiro(muros);
tioJaime.construir();