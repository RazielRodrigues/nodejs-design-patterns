import NinjaInterface from './NinjaInterface.js';
export default class NinjaAreia extends NinjaInterface {

    constructor(jutsu = '', fala = '') {
        super();
        this.jutsu = jutsu;
        this.fala = fala;
    }

    usarJutsu() {
        console.log(`Ninja da areia usando jutsu: ${this.jutsu}`);
    }

    falar() {
        setTimeout(() => {
            console.log(`Ninja da areia falando: ${this.fala}`);
        }, 4000);
    }

}