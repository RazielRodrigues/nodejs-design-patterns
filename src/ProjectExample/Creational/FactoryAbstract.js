/**
 * O objetivo aqui é o polimorfismo bem estruturado
 * quando se tem uma factory que pode ser usada em diversos contextos
 * criamos uma factory abstrata que vai servir como a base
 * do polimorfismo entre as outras factories
 * 
 * usar o extends em uma factory para criar algo sem saber a classe factory principal
 */

export class Drink {
  consume() { }
}

export class Tea extends Drink {
  consume() {
    return 'This is Tea';
  }
}

export class Coffee extends Drink {
  consume() {
    return `This is Coffee`;
  }
}

export class DrinkFactory {
  prepare(amount) {
    return `preparing ${amount}`;
  }
}

export class TeaFactory extends DrinkFactory {
  makeTea() {
    return new Tea();
  }
}

export class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    return new Coffee();
  }
}