/**
 * O padrão Adapter, também conhecido como Wrapper, é um padrão de projeto de software que permite que duas interfaces incompatíveis trabalhem juntas. Ele faz isso criando uma ponte entre essas duas interfaces, permitindo que um objeto de uma interface possa ser tratado como se estivesse em outra.

A ideia principal deste padrão é transformar a interface de uma classe em outra interface que o cliente espera. Isso permite que objetos que originalmente não poderiam trabalhar juntos possam fazê-lo, pois o Adapter age como um intermediário entre eles.

O padrão Adapter é amplamente utilizado na programação orientada a objetos para permitir que objetos antigos e novos trabalhem juntos sem alterar seu código fonte original.
 */

import { JoiaAntiga, JoiaAntigaAdapter } from './JoalheriaAdapter.js';

const compradorAntigo = new JoiaAntiga()
compradorAntigo.gerarCorrenteEstiloDaCasa();

const compradorModerno = new JoiaAntigaAdapter()
compradorModerno.gerarCorrenteEstiloDaCasa()