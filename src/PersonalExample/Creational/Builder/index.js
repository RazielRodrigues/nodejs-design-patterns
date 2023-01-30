import { ComprasBuilder } from './CarrinhoExample/ComprasBuilder.js';
import PostBuilder from './PostExample/PostBuilder.js';

const compra = new ComprasBuilder();

const compras = compra.adicionarProdutos
    .adicionarCarnes('Alcatra', 20)
    .adicionarCarnes('Filé de frango', 20)
    .adicionarCarnes('Picana', 20)
    .adicionarFrutas('Banana', 20)
    .build()
    .listarCompras()

console.log(compras)

const domineiEssaBagaca = new PostBuilder("Meu primo Igor é chato");
const response = domineiEssaBagaca
    .setData(new Date())
    .setDescricao("Lorem ipsum dolor sit amet...")
    .build()
    .toString();

console.log(response);