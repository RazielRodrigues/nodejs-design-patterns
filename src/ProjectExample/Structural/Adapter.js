/**
 * Ajuda a contornar o problema de classes com interfaces incompativeis
 * vamos supor que eu queria dar um extends em uma classe que tem a interface
 * que obriga ter o metodo salvar()
 * 
 * se eu der o extends serei obrigado a implementar esse metodo mesmo não querendo
 * o que quebra o conceito de LISKOV
 * 
 * De qualquer forma o objetivo é fazer um override
 */

class Calculator1 {
    constructor() {
        this.operations = function (value1, value2, operation) {
            switch (operation) {
                case 'add':
                    return value1 + value2;
                case 'sub':
                    return value1 - value2;

            }
        };
    }
}


class Calculator2 {
    constructor() {
        this.add = function (value1, value2) {
            return value1 + value2;
        };
        this.sub = function (value1, value2) {
            return value1 - value2;
        };
    }
}

class CalcAdapter {
    constructor() {
        const cal2 = new Calculator2();

        this.operations = function (value1, value2, operation) {
            switch (operation) {
                case 'add':
                    return cal2.add(value1, value2);
                case 'sub':
                    return cal2.sub(value1, value2);
            }
        };
    }
}

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 55, 'sub'));