import NinjaInterface from './NinjaInterface.js';
export default class NinjaFolha extends NinjaInterface {

    constructor(jutsu = '', fala = '') {
        super();
        this.jutsu = jutsu;
        this.fala = fala;
    }

    usarJutsu() {
        console.log(`Ninja da folha usando jutsu: ${this.jutsu}`);
    }

    falar() {
        setTimeout(() => {
            console.log(`Ninja da folha falando: ${this.fala}`);
        }, 2000);
    }

}