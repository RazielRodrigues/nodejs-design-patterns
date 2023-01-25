import NinjaAreia from './NinjaAreia.js';
import NinjaFolha from './NinjaFolha.js';

export default class NinjaFactory {
    constructor(jutsu = '', fala = '') {
        this.jutsu = jutsu;
        this.fala = fala;
    }

    invocarNinjaAreia() {
        return new NinjaAreia(this.jutsu, this.fala);
    }

    invocarNinjaFolha() {
        return new NinjaFolha(this.jutsu, this.fala);
    }

}