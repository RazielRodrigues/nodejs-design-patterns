/**
 * Nesse exemplo eu estou usando uma factory de ninjas
 * de forma que essa factory possa ser usada para gerar
 * vários tipos de ninjas que vão seguir um comportamento
 * determinado pela interface, isso se chama de fábrica abstrata
 * aonde queremos padronizar a saida dos nossos objetos
 * mas também fornecer a flexibilidade do que escolher
 * sendo estudo de caso de um jogo por exemplo.
 */

import NinjaFactory from './NinjaFactory.js';

const ninjaFactory = new NinjaFactory('raikiri!', 'você já era!');
const ninja = ninjaFactory.invocarNinjaAreia();
const cloneNinja = ninjaFactory.invocarNinjaFolha();

ninja.falar();
ninja.usarJutsu();

cloneNinja.falar();
cloneNinja.usarJutsu();