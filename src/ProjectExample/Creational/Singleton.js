/**
 * usar a mesma instancia de objeto para tudo
 */

class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    say() {
        console.log('Saying...')
    }
}

let s1 = new Singleton();
let s2 = new Singleton();
console.log('Are they same? ' + (s1 === s2));
s1.say();