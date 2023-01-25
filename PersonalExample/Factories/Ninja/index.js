
import NinjaFactory from './NinjaFactory.js';

const ninjaFactory = new NinjaFactory('raikiri!', 'você já era!');
const ninja = ninjaFactory.invocarNinjaAreia();
const cloneNinja = ninjaFactory.invocarNinjaFolha();

ninja.falar();
ninja.usarJutsu();

cloneNinja.falar();
cloneNinja.usarJutsu();