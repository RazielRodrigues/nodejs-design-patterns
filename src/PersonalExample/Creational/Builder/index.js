/**
 * O padrão builder é baseado em implementações de criação de objetos
 * de preferencia usando fluent interface, para isso é usado uma classe
 * que contém os atributos que vão ser construidos. Em seguida na arvore
 * hierarquica disso temos então o conceito de ter uma segunda classe
 * que faz a construção desses atributos através de metodos que geralmente
 * fazem os sets dessa primeira classe. Em seguida temos a função de build, 
 * que passa o objeto com as configurações de set da primeira classe.
 * 
 * Podemos comparar o padrão build a uma aonde temos a classe principal como
 * forma e a classe builder como a massa que é injetada nessa forma, essa forma
 * pode fazer diversos bolos, por exemplo um de chocolate ou de baunilha. aonde
 * quem insere a massa a builder, mas a forma a abstração da forma como tamanho
 * e formato estão salvos na classe principal.
 */

import { ComprasBuilder } from './CarrinhoExample/ComprasBuilder.js';
import PostBuilder from './PostExample/PostBuilder.js';

const compra = new ComprasBuilder();

const compras = compra.adicionarProdutos
    .adicionarCarnes('Alcatra', 20)
    .adicionarCarnes('Filé de frango', 20)
    .adicionarCarnes('Picanha', 20)
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