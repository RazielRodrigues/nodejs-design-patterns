/**
 * Aqui temos uma classe que funciona como um menu
 * onde recebemos um parametro numerico e com base nisso
 * executamos os comandos de outra classe
 */

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} Total balance ${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance - amount >= BankAccount.overdraftLimit) {
            this.balance -= amount;
            console.log("Widhdrawn");
        }
    }

    toString() {
        return `Balance ${this.balance}`;
    }
}

BankAccount.overdraftLimit = -500;

let Action = Object.freeze({
    deposit: 1,
    withdraw: 2,
});

class BankAccountCommand {
    constructor(account, action, amount) {
        this.account = account;
        this.action = action;
        this.amount = amount;
    }

    call() {
        switch (this.action) {
            case Action.deposit:
                this.account.deposit(this.amount);
                break;
            case Action.withdraw:
                this.account.withdraw(this.amount);
                break;
        }
    }

    undo() {
        switch (this.action) {
            case Action.deposit:
                this.account.withdraw(this.amount);
                break;
            case Action.withdraw:
                this.account.deposit(this.amount);
                break;
        }
    }
}

let bankAccount = new BankAccount(100);
let cmd = new BankAccountCommand(bankAccount, Action.deposit, 50);
cmd.call();
console.log(bankAccount.toString());
cmd.undo();
console.log(bankAccount.toString());