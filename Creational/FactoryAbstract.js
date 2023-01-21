/**
 * O objetivo aqui é o polimorfismo bem estruturado
 * quando se tem uma factory que pode ser usada em diversos contextos
 * criamos uma factory abstrata que vai servir como a base
 * do polimorfismo entre as outras factories
 * 
 * usar o extends em uma factory para criar algo sem saber a classe factory principal
 */

class Drink {
  consume() { }
}

class Tea extends Drink {
  consume() {
    return 'This is Tea';
  }
}

class Coffee extends Drink {
  consume() {
    return `This is Coffee`;
  }
}

class DrinkFactory {
  prepare(amount) {
    return `preparing ${amount}`;
  }
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    return new Tea();
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    return new Coffee();
  }
}

module.exports = {
  TeaFactory,
  CoffeeFactory,
  Tea,
  Coffee
}