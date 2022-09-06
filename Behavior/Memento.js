/**
 * Temos uma classe que salva o objeto da classe que queremos
 * poder voltar o estado do objeto dela
 */

class Memento {
    constructor(balance) {
        this.balance = balance;
    }
}

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return new Memento(this.balance);
    }

    restore(m) {
        this.balance = m.balance;
    }

    toString() {
        return `Balance: ${this.balance}`;
    }
}

let bankAccount = new BankAccount(100);
let m1 = bankAccount.deposit(50);

console.log(bankAccount.toString());

// restore to m1
bankAccount.restore(m1);
console.log(bankAccount.toString());