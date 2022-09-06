/**
 * Basicamente temos uma classe que agrupa diversos
 * objetos dentro dela e executamos os metodos
 * desses objetos, entretanto tem de ser algo que
 * faça sentido ser mediado aos outros objetos
 */

class Person {
    constructor(name) {
        this.name = name;
        this.chatLog = [];
    }

    receive(sender, message) {
        let s = `${sender}: '${message}'`;
        console.log(`[${this.name}'s chat session] ${s}`);
        this.chatLog.push(s);
    }

    say(message) {
        this.room.broadcast(this.name, message);
    }

    pm(who, message) {
        this.room.message(this.name, who, message);
    }
}

class ChatRoom {
    constructor() {
        this.people = [];
    }

    broadcast(source, message) {
        for (let p of this.people)
            if (p.name !== source) p.receive(source, message);
    }

    join(p) {
        let joinMsg = `${p.name} joins the chat`;
        this.broadcast("room", joinMsg);
        p.room = this;
        this.people.push(p);
    }

    message(source, destination, message) {
        for (let p of this.people)
            if (p.name === destination) p.receive(source, message);
    }
}

let room = new ChatRoom();

let zee = new Person("Zee");
let shan = new Person("Shan");

room.join(zee);
room.join(shan);

zee.say("Hello!!");

let doe = new Person("Doe");
room.join(doe);
doe.say("Hello everyone!");