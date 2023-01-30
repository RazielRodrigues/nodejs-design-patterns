/**
 * O padrão Prototype é uma das técnicas de programação orientada a objetos que pode ser bastante útil em algumas situações, mas não é tão amplamente utilizado quanto outros padrões como o Singleton, Factory Method, ou mesmo o Builder.

Isso se deve ao fato de que o Prototype pode ser substituído por outras abordagens em muitos casos, como a criação de objetos por meio de uma fábrica ou construtor. No entanto, em alguns casos, o Prototype pode ser a solução mais elegante ou performática, como por exemplo, quando há a necessidade de clonar objetos complexos.

Em resumo, o Prototype pode ser útil em algumas situações, mas não é amplamente utilizado. A escolha da técnica adequada depende do contexto e das especificidades do problema a ser resolvido.
 */

class Virus {
    constructor(nome, perigo) {
        this.nome = nome;
        this.perigo = perigo;
    }

    clonar() {
        return new Virus(this.nome, this.perigo);
    }

    alertar() {
        console.log(`
            Vírus: ${this.nome}
            Periculosidade: ${this.perigo}
        `)
    }

}

const gripe = new Virus('GRIPE SUÍNA', 5);
const covid = gripe.clonar();
covid.nome = "Covid";

gripe.alertar();
covid.alertar();