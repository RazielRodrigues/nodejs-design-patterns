/**
 * Basicamente
 */

class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    fire(sender, args) {
        this.handlers.forEach((v, k) => v(sender, args));
    }
}

class FallsIllArgs {
    constructor(address) {
        this.address = address;
    }
}

class Person {
    constructor(address) {
        this.address = address;
        this.fallsIll = new Event();
    }

    catchCold() {
        this.fallsIll.fire(this, new FallsIllArgs(this.address));
    }
}

let person = new Person("ABC road");
let sub = person.fallsIll.subscribe((s, a) => {
    console.log(`A doctor has been called ` + `to ${a.address}`);
});
person.catchCold();
person.catchCold();

person.fallsIll.unsubscribe(sub);
person.catchCold();