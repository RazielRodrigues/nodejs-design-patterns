export default class Post {
    constructor(builder) {
        this.nome = builder.nome;
        this.descricao = builder.descricao;
        this.data = builder.data;
    }

    toString() {
        return `
            título: ${this.nome} \n
            data postagem: ${this.data} \n
            conteúdo: ${this.descricao} \n
        `;
    }

}