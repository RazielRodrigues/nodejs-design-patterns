export default class LuzSingleton {

    static cor = 'branca';

    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    on() {
        console.log('Luzes acesas! na cor ' + LuzSingleton.cor)
    }

    off() {
        console.log('Luzes apagadas!')
    }

}