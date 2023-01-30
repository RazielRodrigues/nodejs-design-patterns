import Post from "./Post.js";
export default class PostBuilder {
    constructor(nome) {
        this.nome = nome;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    build() {
        return new Post(this);
    }
}