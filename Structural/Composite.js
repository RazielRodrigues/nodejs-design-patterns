/**
 * Basicamente voce passa instancias de objetos
 * para uma classe e executa essas instancias em um for
 */

class Employer {
    constructor(name, role) {
        this.name = name;
        this.role = role;

    }
    print() {
        console.log("name:" + this.name + " role: " + this.role);
    }
}

class EmployerGroup {
    constructor(name, composite = []) {
        this.name = name;
        this.composites = composite;
    }
    print() {
        this.composites.forEach(emp => {
            emp.print();
        })
    }
}

let zee = new Employer("zee", "developer")
let shan = new Employer("shan", "developer")

let groupDevelopers = new EmployerGroup("TI", [zee, shan]);
groupDevelopers.print();