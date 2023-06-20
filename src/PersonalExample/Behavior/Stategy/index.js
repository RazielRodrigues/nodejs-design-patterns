// Estratégias (strategies)
class Pato {
    voar() {
        console.log("O pato está voando!");
    }

    quack() {
        console.log("O pato está fazendo quack!");
    }
}

class Aviao {
    voar() {
        console.log("O avião está voando!");
    }

    quack() {
        console.log("O avião não faz quack!");
    }
}

class Helicoptero {
    voar() {
        console.log("O helicóptero está voando!");
    }

    quack() {
        console.log("O helicóptero não faz quack!");
    }
}

// Contexto (context)
class SimuladorVoo {
    constructor(aeronave) {
        this.aeronave = aeronave;
    }

    setAeronave(aeronave) {
        this.aeronave = aeronave;
    }

    executarVoo() {
        this.aeronave.voar();
        this.aeronave.quack();
    }
}

// Uso do padrão Strategy
const simulador = new SimuladorVoo();

simulador.setAeronave(new Pato());
simulador.executarVoo();

simulador.setAeronave(new Aviao());
simulador.executarVoo();

simulador.setAeronave(new Helicoptero());
simulador.executarVoo();
