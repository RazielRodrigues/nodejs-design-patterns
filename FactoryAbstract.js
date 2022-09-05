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
    prepare(amount)
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