/*
O padrão de projeto Command é um padrão comportamental que encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre solicitações e suporte operações desfazer.

O padrão é composto por quatro principais elementos: o comando abstrato, que define uma interface comum para todos os comandos concretos; os comandos concretos, que implementam a interface do comando abstrato e contêm a lógica específica da solicitação; o invocador, que chama os comandos para executar a solicitação; e o receptor, que possui a lógica de negócio real e é responsável por executar a ação solicitada pelo comando.

O padrão Command permite desacoplar quem solicita uma ação de quem a executa, facilitando a extensibilidade, o controle e a reversão de ações em um sistema.
*/

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
