/**
O design pattern Singleton é uma técnica de programação que visa garantir que apenas uma instância de uma classe seja criada em todo o programa. É utilizado em casos onde é necessário compartilhar um objeto ou recurso entre várias partes do código, sem que haja a necessidade de múltiplas instâncias do objeto.

Uma analogia para o uso do Singleton é compará-lo a uma caixa de luzes em uma casa, onde a caixa é a classe principal e as luzes são as instâncias dessa classe. Com o Singleton, é garantido que existe apenas uma caixa, assim todas as luzes compartilham essa única instância, garantindo que todas as luzes estejam acessando o mesmo estado e comportamento, evitando a existência de várias caixas de luzes independentes.

O padrão de design Singleton é do tipo "criacional", restringindo a criação de objetos para uma classe para apenas uma instância e fornecendo acesso global a uma variável global. Por exemplo, muitos desenvolvedores de web bloqueiam o "mapa do site" para uma única versão que tem escopo global. Além disso, outros padrões, como o método de fábrica, construtor, protótipo, podem usar singletons. Os objetos Facade e State também são geralmente singletons.

Embora você possa ter ou precisar de apenas uma instância de uma classe, isso não significa necessariamente que é o momento de usar o padrão singleton para bloquear esse objeto ou forçá-lo em um estado global. Singletons são um padrão de design controverso, com alguns argumentando que singletons são um anti-padrão a ser evitado, pois o bloqueio de um objeto restringe a flexibilidade futura.

 */

import LuzSingleton from './LuzSingleton.js';

const luzQuarto = new LuzSingleton();
const luzSala = new LuzSingleton();
const luzBanheiro = new LuzSingleton();


luzQuarto.on();
luzSala.on();
luzBanheiro.on();

console.log("-------- alterando cor de todas as luzes através de um comando ----------")

LuzSingleton.cor = 'Vermelho';

luzQuarto.on();
luzSala.on();
luzBanheiro.on();