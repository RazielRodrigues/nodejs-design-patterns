/**
 * Ter uma função que retorna uma instancia da propria classe
 * Dando a possibilidade de alterar os atributos
 */

class Car {

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    SetName(name) {
        console.log(`${name}`)
    }

    clone() {
        return new Car(this.name, this.model);
    }
}

let car = new Car();
car.SetName('Audi');

let car2 = car.clone();
car2.SetName('BMW');