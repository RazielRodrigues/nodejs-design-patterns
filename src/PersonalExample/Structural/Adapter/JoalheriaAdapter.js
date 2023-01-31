export class JoiaAntiga {
    gerarCorrenteEstiloDaCasa() {
        console.log('corrente com muitas pedras e grossa!')
    }
}

export class JoiaModerna {
    gerarCorrenteEstiloBohemio() {
        console.log('corrente mais fina e sem pedras!')
    }
}

export class JoiaAntigaAdapter {
    gerarCorrenteEstiloDaCasa() {
        const joia = new JoiaModerna()
        joia.gerarCorrenteEstiloBohemio()
    }
}