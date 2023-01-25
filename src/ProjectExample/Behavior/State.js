/**
 * Altera um status de um objeto passando outro
 * estado para o objeto e usando tambem uma classe
 * que representa estados
 */

class Switch {
    constructor() {
        this.state = new OffState();
    }

    on() {
        this.state.on(this);
    }

    off() {
        this.state.off(this);
    }
}

class State {
    constructor() {
        if (this.constructor === State) throw new Error("abstract!");
    }

    on(sw) {
        console.log("Light is already on.");
    }

    off(sw) {
        console.log("Light is already off.");
    }
}

class OnState extends State {
    constructor() {
        super();
        console.log("Light turned on.");
    }

    off(sw) {
        console.log("Turning light off...");
        sw.state = new OffState();
    }
}

class OffState extends State {
    constructor() {
        super();
        console.log("Light turned off.");
    }

    on(sw) {
        console.log("Turning light on...");
        sw.state = new OnState();
    }
}

let switch2 = new Switch();
switch2.on();
switch2.off();