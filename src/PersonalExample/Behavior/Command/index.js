// Receptor
export class TV {
    ligar() {
        console.log('TV ligada');
    }

    desligar() {
        console.log('TV desligada');
    }
}

// Comandos
export class LigarTVCommand {
    constructor(tv) {
        this.tv = tv;
    }

    execute() {
        this.tv.ligar();
    }
}

export class DesligarTVCommand {
    constructor(tv) {
        this.tv = tv;
    }

    execute() {
        this.tv.desligar();
    }
}

// Invocador (Controle Remoto)
export class ControleRemoto {
    setCommand(command) {
        this.command = command;
    }

    pressionarBotao() {
        this.command.execute();
    }
}

// Cliente
const tv = new TV();
const ligarTVCommand = new LigarTVCommand(tv);
const desligarTVCommand = new DesligarTVCommand(tv);

const controleRemoto = new ControleRemoto();
controleRemoto.setCommand(ligarTVCommand);
controleRemoto.pressionarBotao(); // Resultado: TV ligada

controleRemoto.setCommand(desligarTVCommand);
controleRemoto.pressionarBotao(); // Resultado: TV desligada
