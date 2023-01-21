/**
 * A ideia é poder usar os chaining operator
 * para no fim ter um objeto feito de outros
 * 
 * Como temos uma classe principal
 * a ideia do builder é passar essa classe
 * para ele e depois ele passar para outros builder, de forma
 * que os outros builder consigam modificar a classe principal
 * e no fim das contas monte um objeto de uma classe
 * baseando em outras abstrações, mas precisa abstrair bem
 * a classe principal primeiro, senão os builder não irão
 * fazer sentido.
 */

class Person {
    constructor() {
        this.streetAddress = this.postcode = this.city = "";

        this.companyName = this.position = "";
        this.annualIncome = 0;
    }
    toString() {
        return (
            `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
            `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
        );
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }

    get lives() {
        return new PersonAddressBuilder(this.person);
    }

    get works() {
        return new PersonJobBuilder(this.person);
    }

    build() {
        return this.person;
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }
    at(companyName) {
        this.person.companyName = companyName;
        return this;
    }

    asA(position) {
        this.person.position = position;
        return this;
    }

    earning(annualIncome) {
        this.person.annualIncome = annualIncome;
        return this;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withPostcode(postcode) {
        this.person.postcode = postcode;
        return this;
    }

    in(city) {
        this.person.city = city;
        return this;
    }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
    .at("ABC Road")
    .in("Multan")
    .withPostcode("66000")
    .works.at("Octalogix")
    .asA("Engineer")
    .earning(10000)
    .build();
console.log(person.toString());