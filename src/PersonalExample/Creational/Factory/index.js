/**
O design pattern factory é um padrão de projeto criacional que fornece uma maneira de instanciar objetos sem especificar a classe concreta que deve ser utilizada. Isso é conseguido através de uma fábrica abstrata, que é uma classe ou interface responsável por criar objetos de acordo com o tipo especificado.

No exemplo dado, uma fábrica de ninjas é utilizada para gerar diferentes tipos de ninjas que seguem um comportamento determinado pela interface. Isso permite que a fábrica padronize a saída dos objetos, mas também forneça flexibilidade na escolha dos objetos. Isso é útil em casos de estudo, como em um jogo, onde diferentes tipos de personagens podem ser criados de acordo com as necessidades do jogo.
 */

import NinjaFactory from './NinjaFactory.js';

const ninjaFactory = new NinjaFactory('raikiri!', 'você já era!');
const ninja = ninjaFactory.invocarNinjaAreia();
const cloneNinja = ninjaFactory.invocarNinjaFolha();

ninja.falar();
ninja.usarJutsu();

cloneNinja.falar();
cloneNinja.usarJutsu();