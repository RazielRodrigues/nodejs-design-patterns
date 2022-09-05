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
    console.log('This is Tea');
  }
}

class Coffee extends Drink {
  consume() {
    console.log(`This is Coffee`);
  }
}

class DrinkFactory {
  prepare(amount) {
    console.log(`preparing ${amount}`);
  }
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log(`Tea Created`);
    return new Tea();
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    console.log(`Coffee Created`);
    return new Coffee();
  }
}

let teaDrinkFactory = new TeaFactory();
let tea = teaDrinkFactory.makeTea()
tea.consume()
teaDrinkFactory.prepare(12) 